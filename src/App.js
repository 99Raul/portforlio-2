import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

const App = () => {
	return (
		<Container>
			<Grid container spacing={7}>
				<Grid item lg={3} md={4} sm={12} xs={12}>
					<Profile />
				</Grid>
				<Grid item xs style={{ backgroundColor: 'red' }}>
					<Header />
					<Router>
						<Switch>
							<Route path='/resume'>
								<Resume />
							</Route>
							<Route path='/'>
								<Portfolio />
							</Route>
						</Switch>
					</Router>
					<Footer />
				</Grid>
			</Grid>
		</Container>
	);
};

export default App;
