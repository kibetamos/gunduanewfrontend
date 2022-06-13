import React, { lazy, Suspense } from 'react';

const LazySinglePost = lazy(() => import('./SinglePost'));

const SinglePost = props => (
  <Suspense fallback={null}>
    <LazySinglePost {...props} />
  </Suspense>
);

export default SinglePost;
