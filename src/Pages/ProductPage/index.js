import { useEffect, useState } from "react";
import request from "../../components/utils/request";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setProducts(data.products);
    //   });
    request("products", "2").then((data) => console.log(data));
    request("products").then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <Button type="button" onClick={() => navigate(`${product.title}/${product.id}`)}>
              {product.title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
