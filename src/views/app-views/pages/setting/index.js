import React, { Component } from 'react'
import { UserOutlined, LockOutlined, CreditCardOutlined, BellOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import Billing from './Billing';
import Notification from './Notification';

const SettingOption = ({ match, location }) => {
	return (
		<Menu
			defaultSelectedKeys={`${match.url}/edit-profile`}
			mode="inline"
			selectedKeys={[location.pathname]}
		>
			<Menu.Item key={`${match.url}/edit-profile`}>
				<UserOutlined />
				<span>Edit Profile</span>
				<Link to={'edit-profile'} />
			</Menu.Item>
			<Menu.Item key={`${match.url}/change-password`}>
				<LockOutlined />
				<span>Change Password</span>
				<Link to={'change-password'} />
			</Menu.Item>
			<Menu.Item key={`${match.url}/billing`}>
				<CreditCardOutlined />
				<span>Billing</span>
				<Link to={`billing`} />
			</Menu.Item>
			<Menu.Item key={`${match.url}/notification`}>
				<BellOutlined />
				<span>Notification</span>
				<Link to={`notification`} />
			</Menu.Item>
		</Menu>
	);
};

const SettingContent = ({ match }) => {
	return (
		<Routes>
			<Route exact from={`${match.url}`} render={() => <Navigate to={`${match.url}/edit-profile`} />}/>
			<Route path={`${match.url}/edit-profile`} element={<EditProfile/>} />
			<Route path={`${match.url}/change-password`} element={<ChangePassword/>} />
			<Route path={`${match.url}/billing`} element={<Billing/>} />
			<Route path={`${match.url}/notification`} element={<Notification/>} />
		</Routes>
	)
}

export class Setting extends Component {
	render() {
		return (
			<InnerAppLayout
				sideContentWidth={320}
				sideContent={<SettingOption {...this.props}/>}
				mainContent={<SettingContent {...this.props}/>}
			/>
    );
	}
}

export default Setting
