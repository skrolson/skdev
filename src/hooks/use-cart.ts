"use client";

import { useEffect, useState } from "react";
import { FREE_SHIPPING_FROM, products, SHIPPING_COST } from "@/data/shop";

export type CartState = Record<string, number>;

const STORAGE_KEY = "demo-shop-cart";
const MAX_QUANTITY = 20;

function readStoredCart(): CartState {
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}");
    if (!parsed || typeof parsed !== "object") return {};
    return Object.fromEntries(
      Object.entries(parsed).filter(
        ([id, quantity]) =>
          products.some((product) => product.id === id) &&
          Number.isInteger(quantity) &&
          (quantity as number) > 0 &&
          (quantity as number) <= MAX_QUANTITY,
      ),
    ) as CartState;
  } catch {
    return {};
  }
}

/** Koszyk zapamiętywany w przeglądarce (działa także, gdy pamięć jest zablokowana). */
export function useCart() {
  const [cart, setCart] = useState<CartState>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCart(readStoredCart());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Tryb prywatny lub zablokowana pamięć: koszyk działa do odświeżenia.
    }
  }, [cart, ready]);

  function change(id: string, delta: number) {
    setCart((current) => {
      const quantity = Math.min((current[id] ?? 0) + delta, MAX_QUANTITY);
      const next = { ...current };
      if (quantity <= 0) delete next[id];
      else next[id] = quantity;
      return next;
    });
  }

  const lines = products
    .filter((product) => cart[product.id])
    .map((product) => ({ product, quantity: cart[product.id]! }));
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + line.quantity * line.product.price, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_COST;

  return { lines, count, subtotal, shipping, total: subtotal + shipping, change };
}

export type Cart = ReturnType<typeof useCart>;
