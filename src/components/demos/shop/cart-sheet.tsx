"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FREE_SHIPPING_FROM } from "@/data/shop";
import type { Cart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";

interface CartSheetProps {
  cart: Cart;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  themeClassName: string;
}

export function CartSheet({ cart, open, onOpenChange, themeClassName }: CartSheetProps) {
  const [notice, setNotice] = useState(false);

  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        setNotice(false);
        onOpenChange(next);
      }}
    >
      <SheetTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          aria-label={`Koszyk, sztuk: ${cart.count}`}
        >
          <ShoppingBag />
          <span className="bg-primary text-primary-foreground grid min-w-6 place-items-center rounded-full px-1.5 py-0.5 text-xs">
            {cart.count}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className={themeClassName}>
        <SheetTitle className="font-display text-3xl font-semibold">Koszyk</SheetTitle>
        <SheetDescription className="text-muted-foreground text-sm">
          Darmowa dostawa od {formatPrice(FREE_SHIPPING_FROM)}.
        </SheetDescription>
        {cart.lines.length === 0 ? (
          <p className="text-muted-foreground py-12 text-center">
            Koszyk jest pusty. Wybierz coś z kolekcji.
          </p>
        ) : (
          <>
            <ul className="divide-y">
              {cart.lines.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 py-4">
                  <Image
                    src={product.image}
                    alt=""
                    width={72}
                    height={72}
                    className="rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-muted-foreground text-sm">
                      {formatPrice(product.price * quantity)}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="size-8"
                        aria-label={`Zmniejsz liczbę: ${product.name}`}
                        onClick={() => cart.change(product.id, -1)}
                      >
                        <Minus />
                      </Button>
                      <span className="w-5 text-center tabular-nums">{quantity}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="size-8"
                        aria-label={`Zwiększ liczbę: ${product.name}`}
                        onClick={() => cart.change(product.id, 1)}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t pt-5">
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt>Produkty</dt>
                  <dd>{formatPrice(cart.subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Dostawa</dt>
                  <dd>{cart.shipping ? formatPrice(cart.shipping) : "0 zł"}</dd>
                </div>
                <div className="flex justify-between text-xl font-semibold">
                  <dt>Razem</dt>
                  <dd>{formatPrice(cart.total)}</dd>
                </div>
              </dl>
              <Button
                type="button"
                size="lg"
                className="mt-5 w-full"
                onClick={() => setNotice(true)}
              >
                Przejdź do płatności
              </Button>
              {notice && (
                <p role="status" className="bg-muted mt-3 rounded-md p-3 text-sm">
                  To sklep demonstracyjny. Płatności są wyłączone i nic nie zostanie zamówione.
                </p>
              )}
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
