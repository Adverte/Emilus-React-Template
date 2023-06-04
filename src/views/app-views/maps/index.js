import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Maps = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Routes>
      <Navigate exact from={`${match.url}`} to={`${match.url}/google-map`} />
      <Route path={`${match.url}/google-map`} element={lazy(() => import(`./google-map`))} />
      <Route path={`${match.url}/simple-map`} element={lazy(() => import(`./simple-map`))} />
    </Routes>
  </Suspense>
);

export default Maps;
