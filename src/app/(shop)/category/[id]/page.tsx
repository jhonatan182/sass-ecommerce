import { notFound } from "next/navigation";

import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { Category } from "@/interfaces";

type CategoryPageProps = {
  params: Promise<{
    id: Category;
  }>;
};

const seedProducts = initialData.products;

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;

  const products = seedProducts.filter((product) => product.gender === id);

  const label: Record<Category, string> = {
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
        title={`Artículos ${label[id]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
