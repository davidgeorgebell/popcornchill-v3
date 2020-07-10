import React, { useState } from 'react';

import Layout from '../components/Layout';
import ListData from '../components/ListData';
import { InfiniteScrolling } from '../components/InfiniteScrolling';
import { useFetchMedia } from '../hooks/useFetchMedia';

export default function PopularTv() {
  const [pageNumber, setPageNumber] = useState(1);

  const { media, error } = useFetchMedia('tv', 'popular', pageNumber);

  if (error) {
    return <h1>Error</h1>;
  }
  if (!media.length) {
    return null;
  }
  return (
    <Layout>
      <h1>Top Rated Movies</h1>
      {media && media.length && (
        <InfiniteScrolling
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          lengthOfMedia={media.length}>
          <ListData media={media} type='tv' />
        </InfiniteScrolling>
      )}
    </Layout>
  );
}
