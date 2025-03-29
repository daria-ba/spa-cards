import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../api/productsApi.ts";
import productReducer from "./productsSlice.ts";

export const store = configureStore({
  reducer: {
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
