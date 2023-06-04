import React, { Component } from 'react'
import { Route, Routes, } from 'react-router-dom';
import MailItem from './MailItem';
import MailDetail from './MaiDetail';
import MailCompose from './MailCompose';

export class MailContent extends Component {
	render() {
		const { match } = this.props
		return (
			<Routes>
				<Route path={`${match.url}/compose`} element={<MailCompose/>} />
				<Route path={`${match.url}/:category/:id`} element={<MailDetail/>} />
				<Route exact path={`${match.url}/:category`} element={<MailItem/>} />
			</Routes>
		)
	}
}

export default MailContent
