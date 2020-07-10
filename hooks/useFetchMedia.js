import { useEffect, useState } from 'react';

export function useFetchMedia(pageNumber) {
  const [media, setMedia] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&page=${pageNumber}&region=GB`
        );
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
