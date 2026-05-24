import Link from "next/link";

import { OrderSummary, ProductsInCart, Title } from "@/components";

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más productos</span>
            <Link href="/" className="underline mb-5">
              Continúa comprando
            </Link>

            {/* Lista de productos */}
            <ProductsInCart />
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2 font-bold">Resumen de orden</h2>

            <OrderSummary />

            <div className="mt-5 mb-2 w-full">
              <Link
                href="/checkout/address"
                className="flex btn-primary justify-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
