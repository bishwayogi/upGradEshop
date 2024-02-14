import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NavigationBar from './common/navigationBar';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';
import ProductsList from './components/products/ProductsList';
import { AuthProvider } from './common/AuthContext';
import ProductSummary from './components/order/ProductSummary';
import {ProductProvider} from './common/ProductContext';
import Order from './components/order/Order';
import OrderDtls from './components/order/OrderDtls';
import AddProducts from './components/products/AddProducts';

const App = () => {
  return (
    <AuthProvider>
    <ProductProvider>
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/SignUp" exact  element={<SignUp/>} />
        <Route path="/Login" exact  element={<Login />} />
        <Route path="/ProductsList" exact  element={<ProductsList />} />
        <Route path="/ProductSummary" exact element={<ProductSummary/>}/>
        <Route path="/Order" exact element={<Order/>}/>
        <Route path="/OrderDtls" exact element={<OrderDtls/>}/>
        <Route path="/AddProducts" exact element={<AddProducts/>}/>
        <Route path="/" exact  element={<Home/>} />
      </Routes>
    </Router>
    </ProductProvider>
    </AuthProvider>
  );
};

export default App;