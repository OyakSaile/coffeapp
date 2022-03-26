import Modal from "react-modal";
import { Route, Routes } from "react-router-dom";

import { DashBoard } from "./pages/dashBoard";
import { HomePage } from "./pages/homePage";
import { LoginPage } from "./pages/loginPage";
import { ProductDetail } from "./pages/productDetail";
import { generateServer } from "./utils/server";

Modal.setAppElement("#root");
generateServer();

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductDetail />} />
        <Route path="products/:productId" element={<ProductDetail />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
}
