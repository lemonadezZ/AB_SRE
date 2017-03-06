import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link , browserHistory} from 'react-router'


import App from './components/App';
import About from './components/About';
import Users from './components/Users';
import NoMatch from './components/NoMatch';


			ReactDOM.render((
				<Router history={browserHistory}>

				<Route path="/" component={App}>
				<Route path="about" component={About}/>
				<Route path="users" component={Users}>
				<Route path="/user/:userId" component={Users}/>
				</Route>
				<Route path="*" component={NoMatch}/>
				</Route>
				</Router>
			),document.getElementById('root')
		       );



