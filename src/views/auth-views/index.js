import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="page"/>}>
      <Routes>
        <Route path={`${AUTH_PREFIX_PATH}/login`} element={lazy(() => import(`./authentication/login`))} />
        <Route path={`${AUTH_PREFIX_PATH}/login-1`} element={lazy(() => import(`./authentication/login-1`))} />
        <Route path={`${AUTH_PREFIX_PATH}/login-2`} element={lazy(() => import(`./authentication/login-2`))} />
        <Route path={`${AUTH_PREFIX_PATH}/register-1`} element={lazy(() => import(`./authentication/register-1`))} />
        <Route path={`${AUTH_PREFIX_PATH}/register-2`} element={lazy(() => import(`./authentication/register-2`))} />
        <Route path={`${AUTH_PREFIX_PATH}/forgot-password`} element={lazy(() => import(`./authentication/forgot-password`))} />
        <Route path={`${AUTH_PREFIX_PATH}/error-1`} element={lazy(() => import(`./errors/error-page-1`))} />
        <Route path={`${AUTH_PREFIX_PATH}/error-2`} element={lazy(() => import(`./errors/error-page-2`))} />
        <Route from={`${AUTH_PREFIX_PATH}`} render={() => <Navigate to={`${AUTH_PREFIX_PATH}/login`} />}/>
      </Routes>
    </Suspense>
  )
}

export default AppViews;

