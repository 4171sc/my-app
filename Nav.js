import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';
import OrderOnline from './pages/orderOnline';
import Reservations from './pages/reservations';
import LogIn from './pages/logIn';

function Nav() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/menu' component={Menu} />
		<Route path='/orderOnline' component={OrderOnline} />
    	<Route path='/reservations' component={Reservations} />
		<Route path='/logIn' component={LogIn} />
	</Routes>
	</Router>
);
}

export default Nav;