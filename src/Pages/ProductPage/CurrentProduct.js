import { useParams } from "react-router-dom";
import useProducts from "../../serviceHooks/useProducts";

const CurrentProduct = () => {
  const { id } = useParams();
  const { data: product } = useProducts(id);

  return (
    <div>
      <h1>Current Product Page</h1>
      <h2>{product?.title}</h2>
    </div>
  );
};

export default CurrentProduct;
