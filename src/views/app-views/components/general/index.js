import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ButtonComponent from './button';
import TypographyComponent from './typography'
import IconComponent from './icon'

const GeneralComponents = ({ match }) => (
  <div>
    <Routes>
      <Route exact from={`${match.url}`} render={() => <Navigate to={`${match.url}/button`} />}/>
      <Route path={`${match.url}/button`} element={<ButtonComponent/>} />
      <Route path={`${match.url}/typography`} element={<TypographyComponent/>} />
      <Route path={`${match.url}/icon`} element={<IconComponent/>} />
    </Routes>
  </div>
);

export default GeneralComponents;
