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
    console.log("getAllProducts Call");
    set({ loading: true });

    try {
      const [beauty, skinCare, fragrances] = await Promise.all([
        useProductStore.getState().getBeauty(),
        useProductStore.getState().getSkinCare(),
        useProductStore.getState().getFragrances(),
      ]);

    //   console.log(beauty);
    //   console.log(skinCare);
    //   console.log(fragrances);

      const skinCareProducts = skinCare.map((item) => ({
        ...item,
        id: `skin-${item.id}`,
      }));

      const beautyProducts = beauty.map((item) => ({
        ...item,
        id: `beauty-${item.id}`,
      }));

      const fragranceProducts = fragrances.map((item) => ({
        ...item,
        id: `fragrance-${item.id}`,
      }));

    //   console.log("Beauty products:", beautyProducts);
    //   console.log("Fragrances products:", fragranceProducts);
    //   console.log("Skin Care products:", skinCareProducts);

      set({
        products: [
          ...beautyProducts,
          ...skinCareProducts,
          ...fragranceProducts,
        ],
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
}));

export default useProductStore;
