import { useEffect, useState } from 'react';

export function useFetchMedia(url, pageNumber) {
  const [media, setMedia] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}${pageNumber}`);
        const media = await response.json();
        const mediaFromApi = media.results;

        if (pageNumber === 1) {
          setMedia(mediaFromApi);
          return;
        }

        setMedia(media => [...media, ...mediaFromApi]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetchData();
  }, [pageNumber]);
  return { loading, error, media };
}
