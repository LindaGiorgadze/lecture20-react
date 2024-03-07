import { Route, Routes } from "react-router-dom";
import AuthLayout from "../Layouts/AuthLayout";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<div>Login Page</div>} />
        <Route path="registration" element={<div>Registration Page</div>} />
        <Route path={"*"} element={<div>Error</div>} />
      </Route>
    </Routes>
  );
};
export default AuthRoutes;
