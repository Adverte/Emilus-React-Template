import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import ProjectList from './project-list/ProjectList';
import Scrumboard from './scrumboard';

const Project = ({ match }) => {
	return (
		<Routes>
			<Route exact from={`${match.url}`} render={() => <Navigate to={`${match.url}/list`} />}/>
			<Route path={`${match.url}/list`} element={<ProjectList/>} />
			<Route path={`${match.url}/scrumboard`} element={<Scrumboard/>} />
		</Routes>
	)
}

export default Project
