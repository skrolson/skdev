export interface BookingDay {
  iso: string;
  weekday: string;
  label: string;
  isSaturday: boolean;
}

/** Najbliższe dni robocze salonu (bez niedziel), od jutra. */
export function getBookingDays(count = 10, from = new Date()): BookingDay[] {
  const weekday = new Intl.DateTimeFormat("pl-PL", { weekday: "short" });
  const label = new Intl.DateTimeFormat("pl-PL", { day: "numeric", month: "short" });
  const days: BookingDay[] = [];
  const cursor = new Date(from.getFullYear(), from.getMonth(), from.getDate(), 12);

  while (days.length < count) {
    cursor.setDate(cursor.getDate() + 1);
    if (cursor.getDay() === 0) continue;
    const iso = [
      cursor.getFullYear(),
      String(cursor.getMonth() + 1).padStart(2, "0"),
      String(cursor.getDate()).padStart(2, "0"),
    ].join("-");
    days.push({
      iso,
      weekday: weekday.format(cursor),
      label: label.format(cursor),
      isSaturday: cursor.getDay() === 6,
    });
  }
  return days;
}

const weekdaySlots = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"];
const saturdaySlots = ["09:00", "10:30", "12:00", "13:30"];

/**
 * Terminy demonstracyjne. Część jest oznaczona jako zajęta w powtarzalny
 * sposób. W prawdziwym wdrożeniu pobierz je z systemu rezerwacji.
 */
export function getTimeSlots(day: BookingDay, specialistId: string) {
  const slots = day.isSaturday ? saturdaySlots : weekdaySlots;
  const seed = [...`${day.iso}${specialistId}`].reduce(
    (sum, char) => sum + char.charCodeAt(0),
    0,
  );
  return slots.map((time, index) => ({ time, available: (seed + index * 7) % 4 !== 0 }));
}
