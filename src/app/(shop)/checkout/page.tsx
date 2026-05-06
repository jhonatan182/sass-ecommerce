import Image from "next/image";
import Link from "next/link";

import { Divider, QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px] ">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar pedido</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>

            {/* Lista de productos */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
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
                  <p>{product.title}</p>
                  <p>L.{product.price} x 2</p>
                  <p className="font-bold">Subtotal: L.{product.price * 2}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Jhonatan Vargas</p>
              <p className="text-xl">Av. Siempreviva 123</p>
              <p className="text-xl">Springfield, IL 62704</p>
              <p className="text-xl">United States</p>
              <p className="text-xl">+1 234 567 890</p>
            </div>

            {/* Divider */}
            <Divider />

            <h2 className="text-2xl mb-2 font-bold">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">L. 250.00</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">L. 37.50</span>

              <span className="text-2xl mt-5">Total:</span>
              <span className="text-2xl text-right mt-5">L. 287.50</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  Al hacer clic en &quot;Colocar orden&quot;, aceptas nuestros{" "}
                  <a href="#" className="underline">
                    términos y condiciones
                  </a>
                  .
                </span>
              </p>
              <Link
                href="/orders/123"
                className="flex btn-primary justify-center"
              >
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
