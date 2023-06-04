import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import GoogleMap from './google-map';
import SimpleMap from './simple-map';

const MapComponents = ({ match }) => (
  <div>
    <Routes>
      <Navigate exact from={`${match.url}`} to={`${match.url}/google-map`} />
      <Route path={`${match.url}/google-map`} element={<GoogleMap/>} />
      <Route path={`${match.url}/simple-map`} element={<SimpleMap/>} />
    </Routes>
  </div>
);

export default MapComponents;
