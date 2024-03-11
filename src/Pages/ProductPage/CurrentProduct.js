import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "../../components/utils/request";

const CurrentProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  useEffect(() => {
    request("products", id).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div>
      <h1>Current Product Page</h1>
      <h2>{product?.title}</h2>
    </div>
  );
};

export default CurrentProduct;
