import type { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];

  getTotalItems: () => number;
  addProductToCart: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      getTotalItems: () =>
        get().cart.reduce((acc, item) => acc + item.quantity, 0),
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size,
        );

        if (!productInCart) {
          set((state) => ({ cart: [...state.cart, product] }));
          return;
        }

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }
          return item;
        });

        set({ cart: updatedCartProducts });
      },
    }),
    { name: "shopping-cart" },
  ),
);
