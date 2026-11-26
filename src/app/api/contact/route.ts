import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import { validateContact, type ContactValues } from "@/lib/validation";

const MAX_BODY_LENGTH = 10_000;

function text(value: unknown) {
  return typeof value === "string" ? value : "";
}

/**
 * Obsługa formularza kontaktowego. Wysyłka działa po ustawieniu zmiennych
 * RESEND_API_KEY, CONTACT_TO_EMAIL i CONTACT_FROM_EMAIL.
 * Przy większym ruchu dodaj limit żądań (np. w Vercel Firewall).
 */
export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ message: "Oczekiwano danych JSON." }, { status: 415 });
  }

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_LENGTH) {
      return NextResponse.json({ message: "Wiadomość jest za długa." }, { status: 413 });
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") throw new Error("Invalid body");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Niepoprawne dane." }, { status: 400 });
  }

  // Bot wypełnił ukryte pole: udajemy sukces i niczego nie wysyłamy.
  if (text(body.website)) {
    return NextResponse.json({ status: "sent" });
  }

  const values: ContactValues = {
    name: text(body.name),
    email: text(body.email).trim(),
    topic: text(body.topic),
    message: text(body.message),
    consent: body.consent === true,
  };

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    return NextResponse.json({ status: "unconfigured" }, { status: 503 });
  }

  const subject = `[${siteConfig.name}] ${values.topic || "Nowa wiadomość"} – ${values.name}`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: values.email,
        subject: subject.replace(/[\r\n]+/g, " "),
        text: `Od: ${values.name} <${values.email}>\nTemat: ${values.topic || "-"}\n\n${values.message}`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("Resend error", response.status, await response.text());
      return NextResponse.json({ message: "Błąd wysyłki." }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json({ message: "Błąd wysyłki." }, { status: 502 });
  }

  return NextResponse.json({ status: "sent" });
}
