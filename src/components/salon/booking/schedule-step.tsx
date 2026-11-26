"use client";

import { useMemo } from "react";
import { OptionButton } from "@/components/salon/booking/option-button";
import type { Specialist } from "@/data/salon";
import { getBookingDays, getTimeSlots, type BookingDay } from "@/lib/booking";

interface ScheduleStepProps {
  specialists: Specialist[];
  specialistId: string | null;
  day: BookingDay | null;
  time: string | null;
  onSpecialist: (id: string) => void;
  onDay: (day: BookingDay) => void;
  onTime: (time: string) => void;
}

export function ScheduleStep({
  specialists,
  specialistId,
  day,
  time,
  onSpecialist,
  onDay,
  onTime,
}: ScheduleStepProps) {
  // Krok pojawia się dopiero po interakcji, więc data pochodzi z przeglądarki.
  const days = useMemo(() => getBookingDays(), []);

  return (
    <div className="space-y-8">
      <fieldset>
        <legend className="mb-3 font-medium">Specjalistka</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {specialists.map((specialist) => (
            <OptionButton
              key={specialist.id}
              selected={specialist.id === specialistId}
              onClick={() => onSpecialist(specialist.id)}
            >
              <span className="block font-medium">{specialist.name}</span>
              <span className="text-muted-foreground block text-sm">{specialist.role}</span>
            </OptionButton>
          ))}
        </div>
      </fieldset>

      {specialistId && (
        <fieldset className="animate-rise">
          <legend className="mb-3 font-medium">Dzień</legend>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {days.map((item) => (
              <OptionButton
                key={item.iso}
                selected={item.iso === day?.iso}
                onClick={() => onDay(item)}
                className="p-3 text-center"
              >
                <span className="text-muted-foreground block text-xs">{item.weekday}</span>
                <span className="block text-sm font-semibold">{item.label}</span>
              </OptionButton>
            ))}
          </div>
        </fieldset>
      )}

      {specialistId && day && (
        <fieldset className="animate-rise">
          <legend className="mb-3 font-medium">Godzina</legend>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-7">
            {getTimeSlots(day, specialistId).map((slot) => (
              <OptionButton
                key={slot.time}
                selected={slot.time === time}
                disabled={!slot.available}
                onClick={() => onTime(slot.time)}
                className="p-3 text-center text-sm font-semibold"
              >
                {slot.time}
              </OptionButton>
            ))}
          </div>
        </fieldset>
      )}
    </div>
  );
}
