import React, { useState, useContext } from 'react';

import Layout from '../../components/Layout';
import ListData from '../../components/ListData';
import { InfiniteScrolling } from '../../components/InfiniteScrolling';
import { useFetchMedia } from '../../hooks/useFetchMedia';
import { GenreContext } from '../../contexts/GenreContext';

export default function Genre({ params }) {
  const { genre } = useContext(GenreContext);

  const [pageNumber, setPageNumber] = useState(1);

  const { media, error } = useFetchMedia(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en&with_genres=${params.id}&page=`,
    pageNumber
  );

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <Layout>
      <h1>{genre}</h1>
      {media && media.length && (
        <InfiniteScrolling
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          lengthOfMedia={media.length}>
          <ListData media={media} type='movie' />
        </InfiniteScrolling>
      )}
    </Layout>
  );
}
export async function getServerSideProps({ params }) {
  return {
    props: {
      params,
    },
  };
}
