import { notFound } from "next/navigation";

type CategoryPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;

  if (id === "kids") {
    notFound();
  }

  return <div>Category {id}</div>;
}
