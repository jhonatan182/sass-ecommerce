"use client";

import Image from "next/image";
import Link from "next/link";

import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import { useMounted } from "@/hook";
import { currencyFormat } from "@/utils";

export function ProductsInCart() {
  const mounted = useMounted();

  const productsInCart = useCartStore((state) => state.cart);
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity,
  );
  const removeProduct = useCartStore((state) => state.removeProduct);

  if (!mounted) return <p>Cargando...</p>;

  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            className="mr-5 rounded"
          />
          <div>
            <Link
              className="hover:underline cursor-pointer"
              href={`/product/${product.slug}`}
            >
              {product.size} - {product.title}
            </Link>
            <p> {currencyFormat(product.price)}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChanged={(value) =>
                updateProductQuantity(product, value)
              }
              quantityAvailable={product.inStock}
            />

            <button
              className="hover:underline cursor-pointer mt-3"
              onClick={() => removeProduct(product)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
