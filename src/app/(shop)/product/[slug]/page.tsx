import { notFound } from "next/navigation";

import {
  AddToCart,
  ProductMobileSlideshow,
  ProductSlideshow,
  StockLabel,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { getProductBySlug } from "@/actions";
import { Metadata, ResolvingMetadata } from "next";
import { currencyFormat } from "@/utils";

type ProductSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: ProductSlugPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;

  // fetch post information
  const product = await getProductBySlug(slug);

  return {
    title: product?.title || "Producto no encontrado",
    description: product?.description || "Descripción no disponible",
    openGraph: {
      title: product?.title || "Producto no encontrado",
      description: product?.description || "Descripción no disponible",
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function ProductSlugPage({
  params,
}: ProductSlugPageProps) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid gap-3 md:grid-cols-3">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">
        {/* Slideshow mobile */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Slideshow desktop */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5 ">
        <StockLabel slug={product.slug} />

        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{currencyFormat(product.price)}</p>

        <AddToCart product={product} />

        {/* Descripción */}

        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
