import { Product } from "@/interfaces";
import { ProductGripItem } from "./ProductGripItem";

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-10 mb-10 sm:grid-cols-3">
      {products.map((product) => (
        <ProductGripItem key={product.slug} product={product} />
      ))}
    </div>
  );
}
