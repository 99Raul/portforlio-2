import React from 'react';
import { Button } from '@material-ui/core';

import './Button2.css';

import MyPdf from '../../files/resume_dev.pdf';

const CustomButton2 = ({ text, icon }) => {
	return (
		<a href={MyPdf} download='My_File.pdf'>
			<Button
				className='custom_btn'
				type='submit'
				endIcon={
					icon ? <div className='btn_icon_container'>{icon}</div> : null
				}>
				<span className='btn_text'>{text}</span>
			</Button>
		</a>
	);
};

export default CustomButton2;
