"use client";

import { useState } from "react";
import Link from "next/link";
import { CircleCheck, Info, LoaderCircle, Send } from "lucide-react";
import { fieldA11y, FormField } from "@/components/shared/form-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import {
  LIMITS,
  validateContact,
  type ContactValues,
  type FieldErrors,
} from "@/lib/validation";

type Status =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "sent" }
  | { type: "notice"; message: string }
  | { type: "error"; message: string };

interface ContactFormProps {
  topics: string[];
  /** Prefiks identyfikatorów pól, unikalny na stronie. */
  idPrefix?: string;
  /** W trybie demo nic nie jest wysyłane. */
  demo?: boolean;
  /** Adres pokazywany, gdy wysyłka nie jest dostępna. */
  fallbackEmail?: string;
}

const emptyValues: ContactValues = {
  name: "",
  email: "",
  topic: "",
  message: "",
  consent: false,
};

export function ContactForm({
  topics,
  idPrefix = "kontakt",
  demo = false,
  fallbackEmail,
}: ContactFormProps) {
  const [values, setValues] = useState<ContactValues>(emptyValues);
  const [errors, setErrors] = useState<FieldErrors<ContactValues>>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [website, setWebsite] = useState("");

  const id = (field: keyof ContactValues) => `${idPrefix}-${field}`;

  function update<K extends keyof ContactValues>(key: K, value: ContactValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0] as keyof ContactValues | undefined;
    if (firstInvalid) {
      document.getElementById(id(firstInvalid))?.focus();
      return;
    }

    setStatus({ type: "sending" });

    if (demo) {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus({
        type: "notice",
        message:
          "Dane są poprawne. To strona demonstracyjna, więc wiadomość nie została wysłana.",
      });
      return;
    }

    const failure = `Nie udało się wysłać wiadomości. Spróbuj ponownie${
      fallbackEmail ? ` lub napisz na ${fallbackEmail}` : ""
    }.`;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website }),
      });
      const result = (await response.json()) as {
        status?: "sent" | "unconfigured";
        errors?: FieldErrors<ContactValues>;
      };

      if (result.errors) {
        setErrors(result.errors);
        setStatus({ type: "idle" });
      } else if (response.ok && result.status === "sent") {
        setValues(emptyValues);
        setStatus({ type: "sent" });
      } else if (result.status === "unconfigured") {
        setStatus({
          type: "notice",
          message: `Wysyłka z formularza nie jest jeszcze skonfigurowana, więc wiadomość nie dotarła. Napisz na ${fallbackEmail}.`,
        });
      } else {
        setStatus({ type: "error", message: failure });
      }
    } catch {
      setStatus({ type: "error", message: failure });
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <FormField id={id("name")} label="Imię" error={errors.name}>
        <Input
          {...fieldA11y(id("name"), errors.name)}
          autoComplete="name"
          maxLength={LIMITS.name}
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
        />
      </FormField>
      <FormField id={id("email")} label="E-mail" error={errors.email}>
        <Input
          {...fieldA11y(id("email"), errors.email)}
          type="email"
          autoComplete="email"
          maxLength={LIMITS.email}
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
        />
      </FormField>
      <FormField id={id("topic")} label="Temat" error={errors.topic} className="sm:col-span-2">
        <NativeSelect
          {...fieldA11y(id("topic"), errors.topic)}
          value={values.topic}
          onChange={(event) => update("topic", event.target.value)}
        >
          <option value="">Wybierz temat (opcjonalnie)</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </NativeSelect>
      </FormField>
      <FormField
        id={id("message")}
        label="Wiadomość"
        error={errors.message}
        className="sm:col-span-2"
      >
        <Textarea
          {...fieldA11y(id("message"), errors.message)}
          maxLength={LIMITS.message}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </FormField>

      {/* Pułapka na boty: pole niewidoczne dla ludzi. */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor={`${idPrefix}-website`}>Strona WWW</label>
        <input
          id={`${idPrefix}-website`}
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label className="text-muted-foreground flex items-start gap-3 text-sm leading-relaxed">
          <input
            {...fieldA11y(id("consent"), errors.consent)}
            type="checkbox"
            className="accent-primary mt-1 size-4 shrink-0"
            checked={values.consent}
            onChange={(event) => update("consent", event.target.checked)}
          />
          <span>
            Zgadzam się na przetwarzanie danych w celu odpowiedzi na wiadomość. Szczegóły w{" "}
            <Link href="/polityka-prywatnosci" className="text-foreground underline">
              polityce prywatności
            </Link>
            .
          </span>
        </label>
        {errors.consent ? (
          <p id={`${id("consent")}-error`} className="text-destructive text-sm">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col items-start gap-4 sm:col-span-2">
        <Button type="submit" size="lg" disabled={status.type === "sending"}>
          {status.type === "sending" ? <LoaderCircle className="animate-spin" /> : <Send />}
          {status.type === "sending" ? "Wysyłanie" : "Wyślij wiadomość"}
        </Button>
        <div role="status" aria-live="polite">
          {status.type === "sent" && (
            <p className="bg-accent text-accent-foreground animate-rise flex gap-3 rounded-md p-4 text-sm">
              <CircleCheck className="size-5 shrink-0" />
              Wiadomość wysłana. Odpowiem najszybciej, jak to możliwe.
            </p>
          )}
          {status.type === "notice" && (
            <p className="bg-muted animate-rise flex gap-3 rounded-md p-4 text-sm">
              <Info className="size-5 shrink-0" />
              {status.message}
            </p>
          )}
          {status.type === "error" && (
            <p className="text-destructive animate-rise text-sm">{status.message}</p>
          )}
        </div>
      </div>
    </form>
  );
}
