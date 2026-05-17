import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;

  const pageParams = page ? parseInt(page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({
      page: pageParams,
    });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}
