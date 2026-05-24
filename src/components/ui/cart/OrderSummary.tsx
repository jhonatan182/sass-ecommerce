"use client";

import { useShallow } from "zustand/shallow";

import { useMounted } from "@/hook";
import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";

export function OrderSummary() {
  const mounted = useMounted();
  const { itemsInCart, subTotal, tax, total } = useCartStore(
    useShallow((state) => state.getSummaryInformation()),
  );

  if (!mounted) return <p>Cargando...</p>;

  return (
    <div className="grid grid-cols-2">
      <span>No. Productos</span>
      <span className="text-right">
        {itemsInCart === 1
          ? `${itemsInCart} artículo`
          : `${itemsInCart} artículos`}
      </span>

      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subTotal)}</span>

      <span>Impuestos (15%)</span>
      <span className="text-right">{currencyFormat(tax)}</span>

      <span className="text-2xl mt-5">Total:</span>
      <span className="text-2xl text-right mt-5">{currencyFormat(total)}</span>
    </div>
  );
}
