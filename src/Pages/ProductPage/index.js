import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useProducts from "../../serviceHooks/useProducts";
import { useContext, useMemo, useState } from "react";
import ThemeContext from "../../Contexts/ThemeContext";

const categories = ["smartphones", "laptops"];
const ProductPage = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);

  const [category, setCategory] = useState("");

  const { data, isLoading, isSuccess } = useProducts();

  const productsList = useMemo(() => {
    return category
      ? data?.filter((product) => product.category === category)
      : data;
  }, [category, data]);

  return (
    <div>
      <h1>Product Page</h1>
      <Button
        className="btn-info"
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        Change Theme
      </Button>
      <div className="my-10">
        <Button
          className="btn-warning"
          onClick={() => setCategory(categories[0])}
        >
          Smartphones
        </Button>
        <Button
          className="btn-warning"
          onClick={() => setCategory(categories[1])}
        >
          Laptops
        </Button>
      </div>
      <ul>
        {isLoading ? (
          <div className="d-flex align-items-center">
            <div
              className="spinner-border ml-auto"
              role="status"
              aria-hidden="true"
            ></div>
          </div>
        ) : (
          isSuccess &&
          productsList?.map((product) => (
            <li key={product.id}>
              <Button
                type="button"
                className={theme === "light" ? "btn-primary" : "btn-dark"}
                onClick={() => navigate(`${product.title}/${product.id}`)}
              >
                {product.title}
              </Button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ProductPage;
