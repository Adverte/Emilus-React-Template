import React from 'react'
import { Routes, Route, } from "react-router-dom";
import AuthViews from 'views/auth-views'

export const AuthLayout = () => {
	return (
		<div className="auth-container">
			<Routes>
				<Route path='' element={<AuthViews/>} />
			</Routes>
		</div>
	)
}


export default AuthLayout
