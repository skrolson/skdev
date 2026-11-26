interface DemoFooterProps {
  brand: string;
  lines: string[];
}

export function DemoFooter({ brand, lines }: DemoFooterProps) {
  return (
    <footer className="border-t pt-14 pb-24">
      <div className="container-page flex flex-col justify-between gap-8 sm:flex-row">
        <div>
          <p className="font-display text-3xl font-semibold">{brand}</p>
          <p className="text-muted-foreground mt-2 text-sm">
            Projekt demonstracyjny. Firma, osoby i dane kontaktowe są fikcyjne.
          </p>
        </div>
        <ul className="text-muted-foreground space-y-1.5 text-sm sm:text-right">
          {lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
