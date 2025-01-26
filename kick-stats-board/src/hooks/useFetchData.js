import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, transformData = null) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);

        const transformedData = transformData
          ? transformData(response.data)
          : response.data;

        setData(transformedData);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, transformData]);

  return { data, isLoading, error };
};

export default useFetchData;
