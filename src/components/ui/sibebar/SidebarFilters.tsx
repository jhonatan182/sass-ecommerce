"use client";

import clsx from "clsx";

import { useUIStore } from "@/store";
import {
  SibebarBackgroundBlack,
  SibebarBackgroundBlur,
  SidebarItem,
} from "@/components";
import {
  IoCloseOutline,
  IoManOutline,
  IoShirtOutline,
  IoWomanOutline,
} from "react-icons/io5";

export function SidebarFilters() {
  const isFiltersOpen = useUIStore((state) => state.isFiltersOpen);
  const closeFilters = useUIStore((state) => state.closeFilters);

  return (
    <div>
      {/* Background black */}
      {isFiltersOpen && <SibebarBackgroundBlack />}

      {/* Blur */}

      {isFiltersOpen && <SibebarBackgroundBlur onClick={closeFilters} />}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 left-0 top-0 w-[90%] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 sm:w-[500px]",
          {
            "-translate-x-full": !isFiltersOpen,
          },
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 left-5 cursor-pointer"
          onClick={closeFilters}
        />

        {/* Categorías */}
        <div className="mt-14">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Categorías
          </h3>

          <SidebarItem
            icon={IoManOutline}
            label="Hombres"
            href="/category/men"
            onClick={closeFilters}
          />

          <SidebarItem
            icon={IoWomanOutline}
            label="Mujeres"
            href="/category/women"
            onClick={closeFilters}
          />

          <SidebarItem
            icon={IoShirtOutline}
            label="Niños"
            href="/category/kid"
            onClick={closeFilters}
          />
        </div>

        <div />
      </nav>
    </div>
  );
}
