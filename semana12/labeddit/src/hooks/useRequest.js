import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    getData()
  }, [url]);

  const getData = () => {
    axios
    .get(url,
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    )
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    
  };
  return {data, getData};
}

export default useRequestData;
