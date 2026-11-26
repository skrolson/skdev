/** Walidacja formularzy współdzielona przez klienta i serwer. */

export type FieldErrors<T> = Partial<Record<keyof T, string>>;

export interface ContactValues {
  name: string;
  email: string;
  topic: string;
  message: string;
  consent: boolean;
}

export interface BookingDetails {
  name: string;
  phone: string;
  email: string;
  notes: string;
  consent: boolean;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s-]{9,18}$/;

export const LIMITS = { name: 80, email: 120, topic: 80, message: 3000, notes: 600 } as const;

export function validateContact(values: ContactValues): FieldErrors<ContactValues> {
  const errors: FieldErrors<ContactValues> = {};
  const name = values.name.trim();
  const message = values.message.trim();

  if (name.length < 2 || name.length > LIMITS.name) {
    errors.name = "Podaj imię (od 2 do 80 znaków).";
  }
  if (!EMAIL_PATTERN.test(values.email.trim()) || values.email.length > LIMITS.email) {
    errors.email = "Podaj poprawny adres e-mail, np. anna@firma.pl.";
  }
  if (values.topic.length > LIMITS.topic) {
    errors.topic = "Wybierz temat z listy.";
  }
  if (message.length < 10 || message.length > LIMITS.message) {
    errors.message = "Napisz co najmniej 10 znaków (maksymalnie 3000).";
  }
  if (!values.consent) {
    errors.consent = "Zaznacz zgodę, aby wysłać wiadomość.";
  }
  return errors;
}

export function validateBooking(values: BookingDetails): FieldErrors<BookingDetails> {
  const errors: FieldErrors<BookingDetails> = {};

  if (values.name.trim().length < 2 || values.name.length > LIMITS.name) {
    errors.name = "Podaj imię i nazwisko.";
  }
  if (!PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Podaj numer telefonu (co najmniej 9 cyfr).";
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Podaj poprawny adres e-mail.";
  }
  if (values.notes.length > LIMITS.notes) {
    errors.notes = "Skróć uwagi do 600 znaków.";
  }
  if (!values.consent) {
    errors.consent = "Zaznacz zgodę, aby potwierdzić rezerwację.";
  }
  return errors;
}
