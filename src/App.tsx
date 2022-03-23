import React from "react";
import { ContentArea } from "./components/ContentArea";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/globals";
import Modal from "react-modal";
import { generateServer } from "./utils/server";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { LoginPage } from "./pages/loginPage";
import { ProductDetail } from "./pages/productDetail";

Modal.setAppElement("#root");
generateServer();
export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="products" element={<ProductDetail />} />
        <Route path="products/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
}
