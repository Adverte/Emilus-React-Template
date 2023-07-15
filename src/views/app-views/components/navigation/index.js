import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AffixComponent from './affix';
import BreadcrumbComponent from './breadcrumb';
import DropdownComponent from './dropdown';
import MenuComponent from './menu';
import PageHeaderComponent from './page-header';
import PaginationComponent from './pagination';
import StepsComponent from './steps';

const NavigationComponents = ({ match }) => (
  <div>
    <Routes>
      <Route exact from={`${match.url}`} render={() => <Navigate to={`${match.url}/affix`} />}/>
      <Route path={`${match.url}/affix`} element={<AffixComponent/>} />
      <Route path={`${match.url}/breadcrumb`} element={<BreadcrumbComponent/>} />
      <Route path={`${match.url}/dropdown`} element={<DropdownComponent/>} />
      <Route path={`${match.url}/menu`} element={<MenuComponent/>} />
      <Route path={`${match.url}/page-header`} element={<PageHeaderComponent/>} />
      <Route path={`${match.url}/pagination`} element={<PaginationComponent/>} />
      <Route path={`${match.url}/steps`} element={<StepsComponent/>} />
    </Routes>
  </div>
);

export default NavigationComponents;
