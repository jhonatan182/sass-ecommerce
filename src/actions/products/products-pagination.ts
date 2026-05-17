"use server";

import { PaginationOptions } from "@/interfaces";
import prisma from "@/lib/prisma";

export async function getPaginatedProductsWithImages({
  page = 1,
  take = 12,
}: PaginationOptions) {
  //validar page
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  //validar take
  if (isNaN(Number(take))) take = 12;
  if (take < 1) take = 12;

  try {
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        productImages: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
    });

    //total paginas
    const totalCount = await prisma.product.count({});
    const totalPages = Math.ceil(totalCount / take);

    console.log({ totalPages });

    return {
      products: products.map((product) => {
        return {
          ...product,
          images: product.productImages.map((image) => image.url),
        };
      }),
      totalPages: totalPages,
      currentPage: page,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener los productos");
  }
}
