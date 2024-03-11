import { Route, Routes } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../../Pages/Login";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="registration" element={<div>Registration Page</div>} />
        <Route path={"*"} element={<div>Error</div>} />
      </Route>
    </Routes>
  );
};
export default AuthRoutes;
