import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts";
import HomePage from "../../Pages/HomePage";
import ProductPage from "../../Pages/ProductPage";
import ContactPage from "../../Pages/ContactPage";
import CurrentProduct from "../../Pages/ProductPage/CurrentProduct";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/:id" element={<CurrentProduct />} />
        <Route path="products/:title/:id" element={<CurrentProduct />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path={"*"} element={<div>Error</div>} />
      </Route>
    </Routes>
  );
};
export default PublicRoutes;
