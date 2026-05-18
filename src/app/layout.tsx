import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "E-Commerce Platform - Mi negocio | Shop",
    template: "%s - Mi negocio | Shop",
  },
  description: "Una tienda virtual para comprar productos",
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
