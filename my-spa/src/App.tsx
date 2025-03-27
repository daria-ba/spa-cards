import "./styles/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import ProductsPage from "./pages/GeneralPage";
import CreateForm from "./pages/FormPage";
import CardComponent from "./pages/ProductPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/create-product" element={<CreateForm />} />
          <Route path="/products/:id" element={<CardComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
