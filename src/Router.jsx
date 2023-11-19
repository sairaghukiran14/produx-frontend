import React, { useEffect } from "react";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ProductPage from "./Pages/ProductPage";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import OrderPage from "./Pages/OrderPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/orderpage" element={<OrderPage />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
