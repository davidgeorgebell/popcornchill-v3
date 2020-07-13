import React, { useState } from 'react';

import Layout from '../components/Layout';
import ListData from '../components/ListData';
import { InfiniteScrolling } from '../components/InfiniteScrolling';
import { useFetchMedia } from '../hooks/useFetchMedia';
import { GrowAnimation } from '../components/Animations';

export default function TopRated() {
  const [pageNumber, setPageNumber] = useState(1);

  const { media, error } = useFetchMedia(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-GB&region=GB&page=`,
    pageNumber
  );

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <Layout>
      <GrowAnimation>
        <h1 className='title'>Popular</h1>
      </GrowAnimation>
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
