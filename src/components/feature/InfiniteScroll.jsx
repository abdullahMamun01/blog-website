import React, { useEffect, useRef } from 'react';

const InfiniteScroll = ({ children, hasMore, fetchNext }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const onIntersecting = (entries) => {
      const loaderItem = entries[0];
      if (loaderItem.isIntersecting && hasMore) {
        fetchNext();
      }
    };

    const observer = new IntersectionObserver(onIntersecting);

    if (hasMore && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore]);

  return (
    <>
      {children}
      {hasMore && <div className='text-white' ref={loaderRef}>load more</div>}
    </>
  );
};

export default InfiniteScroll;
