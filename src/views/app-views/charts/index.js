import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Charts = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Routes>
      <Navigate exact from={`${match.url}`} to={`${match.url}/apex-charts`} />
      <Route path={`${match.url}/apex-charts`} element={lazy(() => import(`./apex`))} />
      <Route path={`${match.url}/chartjs`} element={lazy(() => import(`./chartjs`))} />
    </Routes>
  </Suspense>
);

export default Charts;
