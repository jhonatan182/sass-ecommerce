"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { Product } from "../../../../generated/prisma/client";
import { useState } from "react";
import { Size } from "@/interfaces";

type AddToCartProps = {
  product: Product;
};

export function AddToCart({ product }: AddToCartProps) {
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCard = () => {
    setPosted(true);

    if (!size) return;

    console.log("Agregando al carrito", { size, quantity });
  };

  return (
    <>
      {posted && !size && (
        <span className="text-red-500 mt-2 fade-in">
          Debe de seleccionar una talla*
        </span>
      )}
      {/* Selector de tallas */}
      <SizeSelector
        selectedSize={size}
        availableSizes={product.sizes}
        onSizeChanged={setSize}
      />

      {/* Selector de cantidad */}
      <QuantitySelector
        quantity={quantity}
        onQuantityChanged={setQuantity}
        quantityAvailable={product.inStock}
      />

      {/* Button */}
      <button onClick={addToCard} className="btn-primary my-5 cursor-pointer">
        Agregar al carrito
      </button>
    </>
  );
}
