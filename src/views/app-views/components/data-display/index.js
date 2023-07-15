import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AvatarComponent from './avatar';
import BadgeComponent from './badge';
import CalendarComponent from './calendar';
import CardComponent from './card';
import CarouselComponent from './carousel';
import CollapseComponent from './collapse';
import CommentComponent from './comment';
import DescriptionComponent from './descriptions';
import EmptyComponent from './empty';
import ListComponent from "./list";
import PopoverComponent from './popover';
import StatisticComponent from './statistic';
import TableComponent from './table';
import TabsComponent from './tabs';
import TagComponent from './tag';
import TimelineComponent from './timeline';
import TooltipComponent from './tooltip';
import TreeComponent from './tree';

const DataDisplayComponents = ({ match }) => (
  <div>
    <Routes>
      <Route exact from={`${match.url}`} render={() => <Navigate to={`${match.url}/avatar`} />}/>
      <Route path={`${match.url}/avatar`} element={<AvatarComponent/>} />
      <Route path={`${match.url}/badge`} element={<BadgeComponent/>} />
      <Route path={`${match.url}/calendar`} element={<CalendarComponent/>} />
      <Route path={`${match.url}/card`} element={<CardComponent/>} />
      <Route path={`${match.url}/carousel`} element={<CarouselComponent/>} />
      <Route path={`${match.url}/collapse`} element={<CollapseComponent/>} />
      <Route path={`${match.url}/comment`} element={<CommentComponent/>} />
      <Route path={`${match.url}/descriptions`} element={<DescriptionComponent/>} />
      <Route path={`${match.url}/empty`} element={<EmptyComponent/>} />
      <Route path={`${match.url}/list`} element={<ListComponent/>} />
      <Route path={`${match.url}/popover`} element={<PopoverComponent/>} />
      <Route path={`${match.url}/statistic`} element={<StatisticComponent/>} />
      <Route path={`${match.url}/table`} element={<TableComponent/>} />
      <Route path={`${match.url}/tabs`} element={<TabsComponent/>} />
      <Route path={`${match.url}/tag`} element={<TagComponent/>} />
      <Route path={`${match.url}/timeline`} element={<TimelineComponent/>} />
      <Route path={`${match.url}/tooltip`} element={<TooltipComponent/>} />
      <Route path={`${match.url}/tree`} element={<TreeComponent/>} />
    </Routes>
  </div>
);

export default DataDisplayComponents;
