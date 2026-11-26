import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Ładowanie salonu" className="theme-salon min-h-dvh">
      <div className="container-page grid gap-14 pt-32 pb-24 lg:grid-cols-[1.15fr_1fr]">
        <div className="space-y-5 self-center">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-4/5" />
          <Skeleton className="h-5 w-3/5" />
          <Skeleton className="h-13 w-44 rounded-full" />
        </div>
        <Skeleton className="mx-auto aspect-[4/5] w-full max-w-md rounded-t-full" />
      </div>
    </div>
  );
}
