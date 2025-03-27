import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsApi } from "../api/productsApi";

interface Product {
  id: number;
  title: string;
  artist_display: string;
  image_id: string | undefined;
  liked: boolean;
}

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  loaded: boolean;
  showLikedOnly: boolean;
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  loaded: false,
  showLikedOnly: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product: { id: number }) => product.id !== Number(action.payload),
      );
      if (state.showLikedOnly) {
        state.filteredProducts = state.filteredProducts.filter(
          (product) => product.id !== Number(action.payload),
        );
      }
    },
    editProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(
        (p: { id: number }) => p.id === action.payload.id,
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    toggleLike: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.liked = !product.liked;

        if (state.showLikedOnly) {
          if (!product.liked) {
            state.filteredProducts = state.filteredProducts.filter(
              (p) => p.id !== product.id,
            );
          } else {
            if (!state.filteredProducts.some((p) => p.id === product.id)) {
              state.filteredProducts.push(product);
            }
          }
        }
      }
    },
    toggleFilter: (state) => {
      state.showLikedOnly = !state.showLikedOnly;
      if (state.showLikedOnly) {
        state.filteredProducts = state.products.filter(
          (product) => product.liked,
        );
      } else {
        state.filteredProducts = state.products;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        state.products = payload;
        state.loaded = true;
        state.loading = false;
      },
    );
  },
});

export const {
  addProduct,
  removeProduct,
  editProduct,
  toggleLike,
  toggleFilter,
} = productSlice.actions;
export default productSlice.reducer;
