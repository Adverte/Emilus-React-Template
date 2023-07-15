import React from 'react';
import {Outlet, Route, Routes, Navigate} from 'react-router-dom';
import GridComponent from './grid';
import LayoutComponent from './layout'

const LayoutComponents = ({match}) => (
    <div>
        <Routes>
            <Route path={`${match.url}`} render={() => <Navigate to={`${match.url}/grid`}/>}/>
            <Route path={`${match.url}/grid`} element={<GridComponent/>}/>
            <Route path={`${match.url}/layout`} element={<LayoutComponent/>}/>
        </Routes>
        <Outlet/>
    </div>
);

export default LayoutComponents;
