import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Components = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Routes>
      <Navigate exact from={`${match.url}`} to={`${match.url}/general/button`} />
      <Route path={`${match.url}/general`} element={lazy(() => import(`./general`))} />
      <Route path={`${match.url}/layout`} element={lazy(() => import(`./layout`))} />
      <Route path={`${match.url}/navigation`} element={lazy(() => import(`./navigation`))} />
      <Route path={`${match.url}/data-entry`} element={lazy(() => import(`./data-entry`))} />
      <Route path={`${match.url}/data-display`} element={lazy(() => import(`./data-display`))} />
      <Route path={`${match.url}/feedback`} element={lazy(() => import(`./feedback`))} />
      <Route path={`${match.url}/other`} element={lazy(() => import(`./other`))} />
      <Route path={`${match.url}/charts`} element={lazy(() => import(`./charts`))} />
      <Route path={`${match.url}/maps`} element={lazy(() => import(`./maps`))} />
    </Routes>
  </Suspense>
);

export default Components;
