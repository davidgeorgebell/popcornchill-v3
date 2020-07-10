import React, { useState } from 'react';

import Layout from '../components/Layout';
import ListData from '../components/ListData';
import { InfiniteScrolling } from '../components/InfiniteScrolling';
import { useFetchMedia } from '../hooks/useFetchMedia';

export default function TopRated() {
  const [pageNumber, setPageNumber] = useState(1);

  const { media, error } = useFetchMedia(pageNumber);

  if (error) {
    return <h1>Error</h1>;
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
