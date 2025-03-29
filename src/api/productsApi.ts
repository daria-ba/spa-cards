import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Product {
  id: number;
  title: string;
  artist_display: string;
  image_id: string | undefined;
  liked: boolean;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.artic.edu/api/v1",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/artworks?limit=50",
      transformResponse: (response: {
        data: {
          id: number;
          title: string;
          artist_display: string;
          image_id: string | null;
        }[];
      }) =>
        response.data.map((product) => ({
          id: product.id || Date.now(),
          title: product.title || "Без названия",
          artist_display: product.artist_display || "Автор неизвестен",
          image_id: product.image_id
            ? `https://www.artic.edu/iiif/2/${product.image_id}/full/843,/0/default.jpg`
            : "https://example.com/image.jpg",
          liked: false,
        })),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
export default Product;
