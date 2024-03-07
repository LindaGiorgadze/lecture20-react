import axios from "axios";

const baseUrl = "https://dummyjson.com";

export default async function request(endPoint, id) {
  return await axios
    .get(`${baseUrl}${endPoint ? `/${endPoint}` : ""}${id ? `/${id}` : ""}`)
    .then((res) => {
      // console.log(res);
      const data = res?.data;
      if (id) {
        return data;
      } else {
        return data?.[endPoint];
      }
    });
}
