import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AlertComponent from './alert';
import DrawerComponent from './drawer';
import MessageComponent from './message';
import ModalComponent from './modal';
import NotificationComponent from './notification';
import PopconfirmComponent from './popconfirm';
import ProgressComponent from './progress';
import ResultComponent from './result';
import SkeletonComponent from './skeleton';
import SpinComponent from './spin';

const FeedBackComponents = ({ match }) => (
  <div>
    <Routes>
      <Route exact from={`${match.url}`} render={() => <Navigate to={`${match.url}/alert`} />}/>
      <Route path={`${match.url}/alert`} element={<AlertComponent/>} />
			<Route path={`${match.url}/drawer`} element={<DrawerComponent/>} />
			<Route path={`${match.url}/message`} element={<MessageComponent/>} />
			<Route path={`${match.url}/modal`} element={<ModalComponent/>} />
			<Route path={`${match.url}/notification`} element={<NotificationComponent/>} />
			<Route path={`${match.url}/popconfirm`} element={<PopconfirmComponent/>} />
			<Route path={`${match.url}/progress`} element={<ProgressComponent/>} />
			<Route path={`${match.url}/result`} element={<ResultComponent/>} />
			<Route path={`${match.url}/skeleton`} element={<SkeletonComponent/>} />
			<Route path={`${match.url}/spin`} element={<SpinComponent/>} />
    </Routes>
  </div>
);

export default FeedBackComponents;
