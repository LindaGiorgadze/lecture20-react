import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts";
import ContactPage from "../../Pages/ContactPage";
import React from "react";

const HomePage = React.lazy(() => import("../../Pages/HomePage"));
const Calculator = React.lazy(() => import("../../Pages/Calculator"));
const ProductPage = React.lazy(() => import("../../Pages/ProductPage"));
const CurrentProduct = React.lazy(() =>
  import("../../Pages/ProductPage/CurrentProduct")
);

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<p>Loading package location...</p>}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          path="calculator"
          element={
            <React.Suspense fallback={<p>Loading package location...</p>}>
              <Calculator />
            </React.Suspense>
          }
        />
        <Route
          path="products"
          element={
            <React.Suspense fallback={<p>Loading package location...</p>}>
              <ProductPage />
            </React.Suspense>
          }
        />
        <Route
          path="products/:id"
          element={
            <React.Suspense fallback={<p>Loading package location...</p>}>
              <CurrentProduct />
            </React.Suspense>
          }
        />
        <Route
          path="products/:title/:id"
          element={
            <React.Suspense fallback={<p>Loading package location...</p>}>
              <CurrentProduct />
            </React.Suspense>
          }
        />
        <Route path="contact" element={<ContactPage />} />
        <Route path={"*"} element={<div>Error</div>} />
      </Route>
    </Routes>
  );
};
export default PublicRoutes;
