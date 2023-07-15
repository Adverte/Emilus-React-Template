import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Apex from './apex';
import ChartJs from './chartjs';

const ChartsComponents = ({ match }) => (
  <div>
    <Routes>
      <Route exact from={`${match.url}`} render={() => <Navigate to={`${match.url}/apex-charts`} />}/>
      <Route path={`${match.url}/apex-charts`} element={<Apex/>} />
      <Route path={`${match.url}/chartjs`} element={<ChartJs/>} />
    </Routes>
  </div>
);

export default ChartsComponents;
