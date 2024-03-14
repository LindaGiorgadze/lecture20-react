import { useQuery } from "react-query";
import request from "../components/utils/request";

const useProducts = (id) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const response = await request("products", id);
      return response;
    },
    // onSuccess: () => alert("მოთხოვნა წარმატებით შესრულდა"),
    onError: (error) => console.log(error)
  });

  return { data, isLoading, isSuccess };
};

export default useProducts;
