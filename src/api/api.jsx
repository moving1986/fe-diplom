
import { useEffect, useState } from "react";

export const BASE_URL = 'https://students.netoservices.ru/fe-diplom';

const Api = (url, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let inProgress = true;

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        if (inProgress) {
          if ("error" in data) {
            setData(initialData);
            setError(data.error);
          }
          else {
            setData(data);
            setError(null);
          }

          setLoading(false);
        }
      })
      .catch((error) => {
        if (inProgress) {
          setData(initialData);
          setError(error);
          setLoading(false);
        }
      });

    return () => {
      inProgress = false;
    };

  }, [url, initialData]);

  return { data, error, loading };
};

export default Api;
