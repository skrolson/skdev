"use client";

import { useBooking } from "@/components/salon/booking/booking-context";
import { Button, type ButtonProps } from "@/components/ui/button";

export function BookButton({ serviceId, ...props }: ButtonProps & { serviceId: string }) {
  const { bookService } = useBooking();
  return <Button type="button" onClick={() => bookService(serviceId)} {...props} />;
}
