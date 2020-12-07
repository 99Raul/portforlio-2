import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<Container>
			<Grid container>
				<Grid
					item
					lg={3}
					md={4}
					sm={12}
					xs={12}
					style={{ backgroundColor: 'blue' }}>
					<Profile />
				</Grid>
				<Grid item xs style={{ backgroundColor: 'red' }}>
					<Header />
					<Portfolio />
					<Resume />
					<Footer />
				</Grid>
			</Grid>
		</Container>
	);
};

export default App;
