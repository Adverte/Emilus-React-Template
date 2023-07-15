import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Routes>
        <Route path={`${APP_PREFIX_PATH}/dashboards`} element={lazy(() => import(`./dashboards`))} />
        <Route path={`${APP_PREFIX_PATH}/apps`} element={lazy(() => import(`./apps`))} />
        <Route path={`${APP_PREFIX_PATH}/components`} element={lazy(() => import(`./components`))} />
        <Route path={`${APP_PREFIX_PATH}/pages`} element={lazy(() => import(`./pages`))} />
        <Route path={`${APP_PREFIX_PATH}/maps`} element={lazy(() => import(`./maps`))} />
        <Route path={`${APP_PREFIX_PATH}/charts`} element={lazy(() => import(`./charts`))} />
        <Route path={`${APP_PREFIX_PATH}/docs`} element={lazy(() => import(`./docs`))} />
        <Route path={`${APP_PREFIX_PATH}`} render={() => <Navigate to={`${APP_PREFIX_PATH}/dashboards`} />}/>
      </Routes>
    </Suspense>
  )
}

export default React.memo(AppViews);
