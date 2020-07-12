import React, { useState } from 'react';

import Layout from '../components/Layout';
import ListData from '../components/ListData';
import { InfiniteScrolling } from '../components/InfiniteScrolling';
import { useFetchMedia } from '../hooks/useFetchMedia';

export default function TopRated() {
  const [pageNumber, setPageNumber] = useState(1);

  const { media, error } = useFetchMedia(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&region=GB&page=`,
    pageNumber
  );

  if (error) {
    return <h1>Error</h1>;
  }
  if (!media.length) {
    return null;
  }
  return (
    <Layout>
      <h1 className='title'>Now Playing</h1>
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
