import { titleFont } from "@/config/fonts";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex w-full justify-center text-xs mb-10">
      <Link href="/">
        <span className={`${titleFont.className} antialiased font-bold`}>
          Mi negocio
        </span>
        <span>| Shop</span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link className="mx-3" href="/">
        Privacidad & Legal
      </Link>

      <Link className="mx-3" href="/">
        Ubicaciones
      </Link>
    </footer>
  );
}
