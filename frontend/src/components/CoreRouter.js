import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Header from './Header';

//importing Apps
import Home from './pages/Home';
import Explore from './pages/Explore';
import DataFlow from './pages/DataFlow';
import About from './pages/About';
import Contact from './pages/Contact';



/* hint: the Switch component in react route,  renders a route exclusively. 
   A request at '/' also matches a route at 'about' */


const CoreRouter = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component = {Home}/>
				<Route exact path="/Explore" component = {Explore}/>
				<Route exact path="/DataFlow" component = {DataFlow}/>
				<Route exact path="/About" component = {About}/>
				<Route exact path="/Contact" component = {Contact}/>
			</Switch>
		</div>
	)
};

export default CoreRouter;