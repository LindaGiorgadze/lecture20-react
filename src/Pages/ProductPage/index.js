import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useProducts from "../../serviceHooks/useProducts";

const ProductPage = () => {
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useProducts();

  return (
    <div>
      <h1>Product Page</h1>
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
          data?.map((product) => (
            <li key={product.id}>
              <Button
                type="button"
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
