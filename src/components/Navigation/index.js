import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  const navigation = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/products",
      name: "Products"
    },
    {
      path: "/contact",
      name: "Contact"
    },
    {
      path: "/calculator",
      name: "Calculator"
    }
  ];
  return (
    <header className="App-header">
      <nav>
        <ul>
          {navigation?.map((nav, i) => (
            <li key={i}>
              <NavLink to={nav.path} className={"navItem"}>
                {nav.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
