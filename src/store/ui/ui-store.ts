import { create } from "zustand";

interface UIState {
  //sidebar menu
  isSideMenuOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;

  //sidebar filters
  isFiltersOpen: boolean;
  openFilters: () => void;
  closeFilters: () => void;
}

export const useUIStore = create<UIState>()((set) => ({
  isSideMenuOpen: false,
  openSideMenu: () => set(() => ({ isSideMenuOpen: true })),
  closeSideMenu: () => set(() => ({ isSideMenuOpen: false })),

  isFiltersOpen: false,
  openFilters: () => set(() => ({ isFiltersOpen: true })),
  closeFilters: () => set(() => ({ isFiltersOpen: false })),
}));
