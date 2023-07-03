import { create } from "zustand";

import { devtools, persist, createJSONStorage } from "zustand/middleware";

const cartStore = (set) => ({
  cartItems: [],
  addToCart: (product) => {
    set((state) => {
      let itemExists = state.cartItems.find(
        (item) => item.title == product.title
      );
      let itemIndex = state.cartItems.findIndex(
        (item) => item.title == product.title
      );
      console.log(itemExists);
      if (itemExists) {
        console.log(`INCREASING ${product.title} `);
        state.cartItems[itemIndex].quantity =
          state.cartItems[itemIndex].quantity + 1;
        return {
          cartItems: [...state.cartItems],
        };
      } else {
        console.log(`ADDING ${product.title}`);
        product.quantity = 1;
        return {
          cartItems: [product, ...state.cartItems],
        };
      }
    });
  },
  removeItem: (product) => {
    set((state) => {
      let itemExists = state.cartItems.find(
        (item) => item.title == product.title
      );
      let itemIndex = state.cartItems.findIndex(
        (item) => item.title == product.title
      );

      if (itemExists) {
        state.cartItems.splice(
          state.cartItems.findIndex((a) => a.title === product.title),
          1
        );
      }
      return {
        cartItems: [...state.cartItems],
      };
    });
  },
});

const useCartStore = create(
  devtools(
    persist(cartStore, {
      name: "cartItems",
      storage: createJSONStorage(() => localStorage),
    })
  )
);

export default useCartStore;
