"use client";

import { useEffect, useState } from "react";

import { getStockBySlug } from "@/actions";
import { titleFont } from "@/config/fonts";

type Props = {
  slug: string;
};

export function StockLabel({ slug }: Props) {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getStock = async () => {
      const stockProduct = await getStockBySlug(slug);
      setStock(stockProduct);
      setIsLoading(false);
    };

    getStock();
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center gap-2">
          <span
            className={`${titleFont.className} font-bold text-lg text-gray-300`}
          >
            Stock:
          </span>
          <div className="h-5 w-8 bg-gray-200 rounded animate-pulse" />
        </div>
      ) : (
        <h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
          Stock: {stock}
        </h1>
      )}
    </>
  );
}
