import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export function InfiniteScrolling({
  children,
  lengthOfMedia,
  pageNumber,
  setPageNumber,
}) {
  return (
    <InfiniteScroll
      dataLength={lengthOfMedia}
      next={() => setPageNumber(pageNumber => pageNumber + 1)}
      hasMore={true}
      loader={<h4>Loading...</h4>}>
      {children}
    </InfiniteScroll>
  );
}
