import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AnchorComponent from './anchor';
import BackTopComponent from './backtop';
import ConfigProviderComponent from './config-provider';
import DividerComponent from './divider';

const OtherComponents = ({ match }) => (
  <div>
    <Routes>
      <Route exact from={`${match.url}`} render={() => <Navigate to={`${match.url}/anchor`} />}/>
      <Route path={`${match.url}/anchor`} element={<AnchorComponent/>} />
      <Route path={`${match.url}/backtop`} element={<BackTopComponent/>} />
      <Route path={`${match.url}/config-provider`} element={<ConfigProviderComponent/>} />
      <Route path={`${match.url}/divider`} element={<DividerComponent/>} />
    </Routes>
  </div>
);

export default OtherComponents;
