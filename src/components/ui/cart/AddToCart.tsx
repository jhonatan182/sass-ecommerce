"use client";

import { useState } from "react";

import { QuantitySelector, SizeSelector } from "@/components";
import type { CartProduct, Product, Size } from "@/interfaces";
import { useCartStore } from "@/store";

type AddToCartProps = {
  product: Product;
};

export function AddToCart({ product }: AddToCartProps) {
  const addProductToCart = useCartStore((state) => state.addProductToCart);

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCard = () => {
    setPosted(true);

    if (!size) return;

    // console.log("Agregando al carrito", { size, quantity });
    const cartProduct: CartProduct = {
      id: product.id!,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
      inStock: product.inStock,
    };

    addProductToCart(cartProduct);
    setQuantity(1);
    setSize(undefined);
    setPosted(false);
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
