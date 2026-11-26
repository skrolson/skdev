import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Ładowanie projektu" className="container-page pt-36 pb-24">
      <Skeleton className="h-16 w-3/4" />
      <Skeleton className="mt-5 h-5 w-1/2" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <Skeleton key={index} className="aspect-square rounded-xl" />
        ))}
      </div>
    </div>
  );
}
