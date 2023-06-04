import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Dashboards = ({ match }) => {
  return(
  <Suspense fallback={<Loading cover="content"/>}>
    <Routes>
      <Route path={`${match.url}/default`} element={lazy(() => import(`./default`))} />
      <Route path={`${match.url}/analytic`} element={lazy(() => import(`./analytic`))} />
      <Route path={`${match.url}/sales`} element={lazy(() => import(`./sales`))} />
      <Navigate from={`${match.url}`} to={`${match.url}/default`} />
    </Routes>
  </Suspense>
)};

export default Dashboards;
