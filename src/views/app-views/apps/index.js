import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Routes>
      <Route path={`${match.url}/mail`} element={lazy(() => import(`./mail`))} />
      <Route path={`${match.url}/chat`} element={lazy(() => import(`./chat`))} />
      <Route path={`${match.url}/calendar`} element={lazy(() => import(`./calendar`))} />
      <Route path={`${match.url}/project`} element={lazy(() => import(`./project`))} />
      <Route path={`${match.url}/ecommerce`} element={lazy(() => import(`./e-commerce`))} />
      <Route from={`${match.url}`} render={() => <Navigate to={`${match.url}/mail`} />}/>
    </Routes>
  </Suspense>
);

export default Apps;
