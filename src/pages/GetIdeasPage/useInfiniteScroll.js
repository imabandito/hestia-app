import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);
  const { ref, inView } = useInView({
    onChange: handleInView
  });

  useEffect(() => {
    handleInView();
  }, [ref]);

  useEffect(() => {
    if (isFetching) {
      callback();
    }
  }, [isFetching]);

  function handleInView() {
    if (inView || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching, ref];
};
