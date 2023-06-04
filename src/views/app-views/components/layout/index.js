import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import GridComponent from './grid';
import LayoutComponent from './layout'

const LayoutComponents = ({ match }) => (
  <div>
    <Routes>
      <Navigate exact from={`${match.url}`} to={`${match.url}/grid`} />
      <Route path={`${match.url}/grid`} element={<GridComponent/>} />
      <Route path={`${match.url}/layout`} element={<LayoutComponent/>} />
    </Routes>
  </div>
);

export default LayoutComponents;
