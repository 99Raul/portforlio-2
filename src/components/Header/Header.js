/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import resumeData from '../../utils/resumeData';
// import CustomButton from '../Button/Button';

import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HomeRounded } from '@material-ui/icons';

import { NavLink, withRouter } from 'react-router-dom';
// import { keys } from '@material-ui/core/styles/createBreakpoints';
// import { useHistory } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
	const pathName = props?.location?.pathname;

	// const history = useHistory();
	// const handleClick = () => {
	// 	history.push('../../pages/Resume/Resume.js');
	// };

	return (
		<Navbar expand='lg' sticky='top' className='header'>
			{/* Home Link */}
			<Nav.Link as={NavLink} to='/' className={'header_navlink'}>
				<Navbar.Brand className='header_home'>
					<HomeRounded />
				</Navbar.Brand>
			</Nav.Link>

			<Navbar.Toggle />

			<Navbar.Collapse>
				<Nav className='header_left'>
					{/* Portfolio Link */}
					<Nav.Link
						as={NavLink}
						to='/'
						className={pathName === '/' ? 'header_link_active' : 'header_link'}>
						Portfolio
					</Nav.Link>

					{/* Resume Link */}
					<Nav.Link
						as={NavLink}
						to='/resume'
						className={
							pathName === '/resume' ? 'header_link_active' : 'header_link'
						}>
						Resume
					</Nav.Link>
				</Nav>

				<div className='header_right'>
					{Object.keys(resumeData.socials).map((key) => (
						<a href={resumeData.socials[key].link} target='_blank'>
							{resumeData.socials[key].icon}
						</a>
					))}

					{/* <CustomButton
						onClick={handleClick}
						text={'Hire Me'}
						icon={<Telegram />}
					/> */}
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default withRouter(Header);
