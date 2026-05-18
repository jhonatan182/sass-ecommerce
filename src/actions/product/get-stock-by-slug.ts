"use server";

import prisma from "@/lib/prisma";

export async function getStockBySlug(slug: string) {
  try {
    const stockProduct = await prisma.product.findFirst({
      where: {
        slug: slug,
      },
      select: {
        inStock: true,
      },
    });

    return stockProduct?.inStock ?? 0;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener el stock por slug");
  }
}
