import React, { lazy, Suspense } from 'react';

const LazyUploadPost = lazy(() => import('./UploadPost'));

const UploadPost = props => (
  <Suspense fallback={null}>
    <LazyUploadPost {...props} />
  </Suspense>
);

export default UploadPost;
