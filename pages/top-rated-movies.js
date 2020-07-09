import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getListsData } from '../lib/tmdbApi';
import Layout from '../components/Layout';
import ListData from '../components/ListData';
import { InfiniteScrolling } from '../components/InfiniteScrolling';

export default function TopRated() {
  const [pageNumber, setPageNumber] = useState(1);
  const [media, setMedia] = useState({});

  useEffect(() => {
    getData();
  }, [pageNumber]);

  async function getData() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&page=${pageNumber}&region=GB`
    );
    const data = await res.json();

    const mediaFromApi = data.results;

    if (pageNumber === 1) {
      setMedia(mediaFromApi);
      return;
    }

    setMedia(media => [...media, ...mediaFromApi]);
  }

  const lengthOfMedia = media && media.length;

  return (
    <Layout>
      <h1>Top Rated Movies</h1>
      {media && lengthOfMedia && (
        <InfiniteScrolling
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          lengthOfMedia={lengthOfMedia}>
          <ListData media={media} />
        </InfiniteScrolling>
      )}
    </Layout>
  );
}
// export async function getServerSideProps(page) {
//   const movies = await getListsData('movie', 'top_rated', page);

//   return {
//     props: {
//       movies,
//     },
//   };
// }
