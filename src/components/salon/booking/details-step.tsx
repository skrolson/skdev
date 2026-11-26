import { fieldA11y, FormField } from "@/components/shared/form-field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LIMITS, type BookingDetails, type FieldErrors } from "@/lib/validation";

interface DetailsStepProps {
  values: BookingDetails;
  errors: FieldErrors<BookingDetails>;
  onChange: <K extends keyof BookingDetails>(key: K, value: BookingDetails[K]) => void;
}

export function DetailsStep({ values, errors, onChange }: DetailsStepProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <FormField
        id="rez-name"
        label="Imię i nazwisko"
        error={errors.name}
        className="sm:col-span-2"
      >
        <Input
          {...fieldA11y("rez-name", errors.name)}
          autoComplete="name"
          maxLength={LIMITS.name}
          value={values.name}
          onChange={(event) => onChange("name", event.target.value)}
        />
      </FormField>
      <FormField id="rez-phone" label="Telefon" error={errors.phone}>
        <Input
          {...fieldA11y("rez-phone", errors.phone)}
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(event) => onChange("phone", event.target.value)}
        />
      </FormField>
      <FormField id="rez-email" label="E-mail" error={errors.email}>
        <Input
          {...fieldA11y("rez-email", errors.email)}
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => onChange("email", event.target.value)}
        />
      </FormField>
      <FormField
        id="rez-notes"
        label="Uwagi"
        error={errors.notes}
        hint="Opcjonalnie: czego oczekujesz po wizycie."
        className="sm:col-span-2"
      >
        <Textarea
          {...fieldA11y("rez-notes", errors.notes)}
          maxLength={LIMITS.notes}
          value={values.notes}
          onChange={(event) => onChange("notes", event.target.value)}
        />
      </FormField>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-sm">
          <input
            {...fieldA11y("rez-consent", errors.consent)}
            type="checkbox"
            className="accent-primary mt-0.5 size-4"
            checked={values.consent}
            onChange={(event) => onChange("consent", event.target.checked)}
          />
          Zgadzam się na kontakt w sprawie tej rezerwacji.
        </label>
        {errors.consent && (
          <p id="rez-consent-error" className="text-destructive mt-2 text-sm">
            {errors.consent}
          </p>
        )}
      </div>
    </div>
  );
}
