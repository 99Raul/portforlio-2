import React, { useState } from 'react';
import './Portfolio.css';
import { Grid, Tabs, Tab } from '@material-ui/core';

const Portfolio = () => {
	const [tabValue, setTabValue] = useState('All');

	return (
		<Grid container className='section pt_45 pb_45'>
			{/* title */}
			<Grid item className='section_title mb_30'>
				<span></span>
				<h6 className='section_title_text'>Portfolio</h6>
			</Grid>

			{/* Tabs */}
			<Grid item xs={12}>
				<Tabs
					value={tabValue}
					indicatorColor='white'
					className='custom_tabs'
					onChange={(event, newValue) => setTabValue(newValue)}>
					<Tab
						label='All'
						value='All'
						className={
							tabValue === 'All' ? 'customTabs_item_active' : 'customTabs_item'
						}
					/>
				</Tabs>
			</Grid>
		</Grid>
	);
};

export default Portfolio;
