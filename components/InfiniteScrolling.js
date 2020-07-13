import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export function InfiniteScrolling({ children, lengthOfMedia, setPageNumber }) {
  return (
    <InfiniteScroll
      dataLength={lengthOfMedia}
      next={() => setPageNumber(pageNumber => pageNumber + 1)}
      hasMore={true}>
      {children}
    </InfiniteScroll>
  );
}
