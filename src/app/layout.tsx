import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "E-Commerce Platform - Mi negocio | Shop",
    template: "%s - Mi negocio | Shop",
  },
  description: "Una tienda virtual para comprar productos",
  openGraph: {
    title: "E-Commerce Platform - Mi negocio | Shop",
    description: "Una tienda virtual para comprar productos",
    images: ["/imgs/starman_750x750.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
