import { useEffect, useState } from 'react';

export const useFetch = (type, option) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${option}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&page=1&region=GB`
        );
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetchData();
  }, []);
  return { loading, error, response };
};
