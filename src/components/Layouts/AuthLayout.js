import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";

const AuthLayout = () => {
  return (
    <>
      <Navigation />
      <h1>Welcome to our page</h1>
      <Outlet />
    </>
  );
};

export default AuthLayout;
