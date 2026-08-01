import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  getSkinCare: async () => {
    const res = await fetch(
      "https://dummyjson.com/products/category/skin-care",
    );
    const data = await res.json();
    return data.products;
  },
  getBeauty: async () => {
    const res = await fetch("https://dummyjson.com/products/category/beauty");
    const data = await res.json();
    return data.products;
  },

  getFragrances: async () => {
    const res = await fetch(
      "https://dummyjson.com/products/category/fragrances",
    );
    const data = await res.json();
    return data.products;
  },

  getAllProducts: async () => {
    set({ loading: true });

    try {
      const [beauty, skinCare, fragrances] = await Promise.all([
        useProductStore.getState().getBeauty(),
        useProductStore.getState().getSkinCare(),
        useProductStore.getState().getFragrances(),
      ]);

      set({
        products: [...beauty,...skinCare, ...fragrances],
        loading: false,
      });
    //   console.log("Beauty products:", beauty);
    //   console.log("Fragrances products:", fragrances);
    //   console.log("Skin Care products:", skinCare);
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
}));

export default useProductStore;
