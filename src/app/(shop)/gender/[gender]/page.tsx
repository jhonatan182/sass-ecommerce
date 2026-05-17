import { notFound, redirect } from "next/navigation";

import { Pagination, ProductGrid, Title } from "@/components";
import { getPaginatedProductsWithImages } from "@/actions";
import { Gender } from "../../../../../generated/prisma/enums";

type GenderIdPageProps = {
  params: Promise<{
    gender: string;
  }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function GenderPage({
  params,
  searchParams,
}: GenderIdPageProps) {
  const { gender } = await params;
  const { page } = await searchParams;

  const pageParams = page ? parseInt(page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page: pageParams,
    gender: gender as Gender,
  });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  const label: Record<string, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };
  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <>
      <Title
        title={`Artículos ${label[gender]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
