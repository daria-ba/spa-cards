import { Navigate, RouteObject } from "react-router-dom";
import ProductsPage from "./pages/ProductPage";
import CreateProductForm from "./pages/CreateProductForm";
import GeneralPage from "./pages/GeneralPage";

export const routes: RouteObject[] = [
  { path: "/", element: <Navigate to="/products" replace /> },
  { path: "/products", element: <GeneralPage /> },
  { path: "/create-product", element: <CreateProductForm /> },
  { path: "/products/:id", element: <ProductsPage /> },
];
