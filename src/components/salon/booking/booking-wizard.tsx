"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Check, ChevronLeft, CircleCheck } from "lucide-react";
import { useBooking } from "@/components/salon/booking/booking-context";
import { DetailsStep } from "@/components/salon/booking/details-step";
import { ScheduleStep } from "@/components/salon/booking/schedule-step";
import { ServiceStep } from "@/components/salon/booking/service-step";
import { Button } from "@/components/ui/button";
import { salonServices, specialists } from "@/data/salon";
import type { BookingDay } from "@/lib/booking";
import { cn, formatPrice } from "@/lib/utils";
import { validateBooking, type BookingDetails, type FieldErrors } from "@/lib/validation";

const steps = ["Usługa", "Termin", "Twoje dane", "Potwierdzenie"];

const emptyDetails: BookingDetails = {
  name: "",
  phone: "",
  email: "",
  notes: "",
  consent: false,
};

export function BookingWizard() {
  const { serviceId, setServiceId, requestId } = useBooking();
  const [step, setStep] = useState(0);
  const [specialistId, setSpecialistId] = useState<string | null>(null);
  const [day, setDay] = useState<BookingDay | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [details, setDetails] = useState(emptyDetails);
  const [errors, setErrors] = useState<FieldErrors<BookingDetails>>({});
  const headingRef = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(0);

  const service = salonServices.find((item) => item.id === serviceId);
  const available = specialists.filter(
    (item) => service && item.categories.includes(service.category),
  );
  const specialist = available.find((item) => item.id === specialistId);

  // Skrót „Umów” z oferty wraca do wyboru usługi z już zaznaczoną pozycją.
  useEffect(() => {
    if (requestId > 0) setStep(0);
  }, [requestId]);

  // Po zmianie kroku przenosimy fokus na nagłówek (czytniki ekranu).
  useEffect(() => {
    if (previousStep.current !== step) {
      previousStep.current = step;
      headingRef.current?.focus({ preventScroll: true });
    }
  }, [step]);

  function selectService(id: string) {
    setServiceId(id);
    setSpecialistId(null);
    setDay(null);
    setTime(null);
  }

  const canContinue =
    [Boolean(service), Boolean(specialist && day && time), true][step] ?? false;

  function handleNext(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canContinue) return;
    if (step === 2) {
      const nextErrors = validateBooking(details);
      setErrors(nextErrors);
      const first = Object.keys(nextErrors)[0];
      if (first) {
        document.getElementById(`rez-${first}`)?.focus();
        return;
      }
    }
    setStep((current) => current + 1);
  }

  function reset() {
    setServiceId(null);
    setSpecialistId(null);
    setDay(null);
    setTime(null);
    setDetails(emptyDetails);
    setStep(0);
  }

  const summary = [
    ["Usługa", service?.name],
    ["Specjalistka", specialist?.name],
    ["Termin", day && time ? `${day.weekday}, ${day.label}, ${time}` : undefined],
    ["Cena", service ? formatPrice(service.price) : undefined],
  ] as const;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_18rem]">
      <form
        onSubmit={handleNext}
        noValidate
        className="bg-card shadow-soft rounded-xl border p-5 sm:p-8"
      >
        <ol aria-label="Etapy rezerwacji" className="grid grid-cols-4 gap-2">
          {steps.map((label, index) => (
            <li key={label} aria-current={index === step ? "step" : undefined}>
              <span className="bg-muted block h-1 overflow-hidden rounded-full">
                <span
                  className={cn(
                    "bg-primary block h-full origin-left transition-transform duration-500",
                    index <= step ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </span>
              <span
                className={cn(
                  "mt-2 hidden items-center gap-1 text-xs sm:flex",
                  index === step ? "font-semibold" : "text-muted-foreground",
                )}
              >
                {index < step && <Check aria-hidden className="size-3" />}
                {label}
              </span>
            </li>
          ))}
        </ol>

        <h3
          ref={headingRef}
          tabIndex={-1}
          className="mt-8 mb-5 text-3xl font-semibold outline-none"
        >
          {steps[step]}
        </h3>

        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <ServiceStep key={requestId} selectedId={serviceId} onSelect={selectService} />
            )}
            {step === 1 && (
              <ScheduleStep
                specialists={available}
                specialistId={specialistId}
                day={day}
                time={time}
                onSpecialist={(id) => {
                  setSpecialistId(id);
                  setTime(null);
                }}
                onDay={(next) => {
                  setDay(next);
                  setTime(null);
                }}
                onTime={setTime}
              />
            )}
            {step === 2 && (
              <DetailsStep
                values={details}
                errors={errors}
                onChange={(key, value) => {
                  setDetails((current) => ({ ...current, [key]: value }));
                  setErrors((current) => ({ ...current, [key]: undefined }));
                }}
              />
            )}
            {step === 3 && (
              <div role="status" className="py-6 text-center">
                <CircleCheck aria-hidden className="text-primary mx-auto size-14" />
                <p className="font-display mt-4 text-3xl">
                  {details.name.split(" ")[0]}, tak wygląda potwierdzenie
                </p>
                <p className="text-muted-foreground mx-auto mt-3 max-w-md">
                  To strona demonstracyjna: rezerwacja nie została zapisana, a dane nie opuściły
                  Twojej przeglądarki.
                </p>
                <Button type="button" variant="outline" className="mt-7" onClick={reset}>
                  Zarezerwuj inną wizytę
                </Button>
              </div>
            )}
          </m.div>
        </AnimatePresence>

        {step < 3 && (
          <div className="mt-8 flex items-center justify-between border-t pt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setStep((current) => current - 1)}
              className={cn(step === 0 && "invisible")}
            >
              <ChevronLeft />
              Wstecz
            </Button>
            <Button type="submit" disabled={!canContinue}>
              {step === 2 ? "Potwierdź rezerwację" : "Dalej"}
            </Button>
          </div>
        )}
      </form>

      <aside aria-label="Podsumowanie rezerwacji" className="bg-secondary h-fit rounded-xl p-6">
        <h3 className="text-2xl font-semibold">Twoja wizyta</h3>
        <dl className="mt-4 divide-y">
          {summary.map(([label, value]) => (
            <div key={label} className="py-3">
              <dt className="text-muted-foreground text-xs">{label}</dt>
              <dd className="mt-0.5 font-medium">{value ?? "Do wyboru"}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  );
}
