"use client";

import clsx from "clsx";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

import { useUIStore } from "@/store";
import {
  Divider,
  SibebarBackgroundBlack,
  SibebarBackgroundBlur,
  SidebarItem,
} from "@/components";

export function Sidebar() {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && <SibebarBackgroundBlack />}

      {/* Blur */}

      {isSideMenuOpen && <SibebarBackgroundBlur onClick={closeSideMenu} />}

      {/* Sidemenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[90%] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 sm:w-[500px]",
          {
            "translate-x-full": !isSideMenuOpen,
          },
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeSideMenu}
        />

        {/* Input search */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-3 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-100 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu items */}
        <SidebarItem href="/" icon={IoPersonOutline} label="Perfil" />
        <SidebarItem href="/" icon={IoTicketOutline} label="Órdenes" />
        <SidebarItem href="/" icon={IoLogInOutline} label="Ingresar" />
        <SidebarItem href="/" icon={IoLogOutOutline} label="Salir" />

        {/* Divider */}
        <Divider />

        <SidebarItem href="/" icon={IoShirtOutline} label="Productos" />
        <SidebarItem href="/" icon={IoTicketOutline} label="Órdenes" />
        <SidebarItem href="/" icon={IoPeopleOutline} label="Usuarios" />

        <div />
      </nav>
    </div>
  );
}
