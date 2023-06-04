import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Pages = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Routes>
      <Navigate exact from={`${match.url}`} to={`${match.url}/profile`} />
      <Route path={`${match.url}/profile`} element={lazy(() => import(`./profile`))} />
      <Route path={`${match.url}/invoice`} element={lazy(() => import(`./invoice`))} />
      <Route path={`${match.url}/pricing`} element={lazy(() => import(`./pricing`))} />
      <Route path={`${match.url}/faq`} element={lazy(() => import(`./faq`))} />
      <Route path={`${match.url}/setting`} element={lazy(() => import(`./setting`))} />
      <Route path={`${match.url}/user-list`} element={lazy(() => import(`./user-list`))} />
    </Routes>
  </Suspense>
);

export default Pages;
