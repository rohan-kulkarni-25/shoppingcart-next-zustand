import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";
import products from "./data.js";

const productStore = (set) => ({
  // products: [
  //   {
  //     title: "1",
  //     image: "/../static/demo.jpeg",
  //     description: "10",
  //     rating: 4.5,
  //     price: 250,
  //   },
  //   {
  //     title: "2",
  //     image: "/../static/demo.jpeg",
  //     description: "10",
  //     rating: 4.5,
  //     price: 250,
  //   },
  //   {
  //     title: "3",
  //     image: "/../static/demo.jpeg",
  //     description: "10",
  //     rating: 4.5,
  //     price: 250,
  //   },
  //   {
  //     title: "4",
  //     image: "/../static/demo.jpeg",
  //     description: "10",
  //     rating: 4.5,
  //     price: 250,
  //   },
  // ],
  products,
  addProduct: (product) => {
    set((state) => {
      products: [product];
    });
  },
});

const useProductStore = create(
  devtools(persist(productStore, { name: "products" }))
);

export default useProductStore;
