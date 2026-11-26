import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div role="status" aria-label="Ładowanie strony" className="container-page pt-40 pb-24">
      <div className="flex flex-col items-center gap-5">
        <Skeleton className="h-9 w-48 rounded-full" />
        <Skeleton className="h-16 w-full max-w-3xl sm:h-24" />
        <Skeleton className="h-16 w-4/5 max-w-2xl sm:h-24" />
        <Skeleton className="h-5 w-full max-w-lg" />
        <div className="mt-4 flex gap-3">
          <Skeleton className="h-13 w-44 rounded-full" />
          <Skeleton className="h-13 w-36 rounded-full" />
        </div>
      </div>
      <Skeleton className="mt-20 aspect-[16/10] w-full rounded-2xl" />
    </div>
  );
}
