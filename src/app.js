import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import App from './components/App';
import About from './components/About';
import Users from './components/Users';
import NoMatch from './components/NoMatch';


render((
			<Router>

			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/users">Topics</Link></li>
					<li><Link to="/user/aaa">Topics</Link></li>
				</ul>
			<hr/>
	
			<Route exact path="/" component={App}/>
			<Route path="/about" component={About}/>
			<Route path="/users" component={Users}/>
			<Route path="/user/:id" component={Users}/>
			</div>
			</Router>
       ),document.getElementById('root')
      );



