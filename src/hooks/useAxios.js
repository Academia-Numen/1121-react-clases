import axios from "axios";
import { useEffect, useState } from "react";

export function useAxios(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState({
        message: '',
        isError: false,
    });
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios(url)
      .then(res => setData(res.data))
      .catch(err => setError({
        message: err.message,
        isError: true,
      }))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      });
  }, []);

  return { data, isLoading, error };
};
