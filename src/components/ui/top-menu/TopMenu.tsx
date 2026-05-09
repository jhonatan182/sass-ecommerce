"use client";

import {
  IoSearchOutline,
  IoCartOutline,
  IoFilterOutline,
  IoMenuOutline,
} from "react-icons/io5";
import Link from "next/link";

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";

export function TopMenu() {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const openFilters = useUIStore((state) => state.openFilters);
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const isFiltersOpen = useUIStore((state) => state.isFiltersOpen);

  return (
    <nav
      className={`flex px-5 justify-between items-center w-full p-2 fixed top-0 left-0 right-0 z-50 bg-white ${isFiltersOpen || isSideMenuOpen ? "hidden" : ""}`}
    >
      {/* Filtro - solo en movil */}
      <div className="sm:hidden">
        <IoFilterOutline className="w-5 h-5" onClick={openFilters} />
      </div>

      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Mi negocio
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      {/* Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/men"
        >
          Hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/category/kid"
        >
          Niños
        </Link>
      </div>
      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <div className="mx-2">
          <IoMenuOutline className="w-6 h-6" onClick={openSideMenu} />
        </div>

        {/* <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openSideMenu}
        >
          Menú
        </button> */}
      </div>
    </nav>
  );
}
