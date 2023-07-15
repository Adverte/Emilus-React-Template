import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import ProductList from './product-list'
import AddProduct from './add-product'
import EditProduct from './edit-product'
import Orders from './orders'

const Ecommerce = props => {
  const { match } = props
	return (
		<Routes>
			<Route exact from={`${match.url}`} render={() => <Navigate to={`${match.url}/product-list`} />}/>
			<Route path={`${match.url}/add-product`} element={<AddProduct/>} />
			<Route path={`${match.url}/edit-product/:id`} element={<EditProduct/>} />
			<Route path={`${match.url}/product-list`} element={<ProductList/>} />
			<Route path={`${match.url}/orders`} element={<Orders/>} />
		</Routes>
	)
}

export default Ecommerce

