import React from 'react';
import './Resume.css';
import { Grid, Icon, TextField, Typography } from '@material-ui/core';

import resumeData from '../../utils/resumeData';
import CustomTimeline, {
	CustomTimelineSeparator,
} from '../../components/Timeline/Timeline';
import WorkIcon from '@material-ui/icons/Work';
import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineContent from '@material-ui/lab/TimelineContent';
import SchoolIcon from '@material-ui/icons/School';
import Paper from '@material-ui/core/Paper';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CustomButton from '../../components/Button/Button';

import emailjs from 'emailjs-com';

const Resume = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_API_KEY,
				process.env.REACT_APP_TEMPLATE_API_KEY,
				e.target,
				'user_ZLpf9rRCqVdvCyTIdPFRG'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();

		console.log('');
	}

	return (
		<>
			{/* About Me */}
			<Grid container className='section pb_45 pt_45'>
				<Grid item className='section_title mb_30'>
					<span></span>
					<h6 className='section_title_text'>About Me</h6>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='body2' className='aboutme_text'>
						{resumeData.about}
					</Typography>
				</Grid>
			</Grid>
			{/* Education and experiences */}
			<Grid container className='section section pb_45'>
				<Grid item className='section_title mb_30'>
					<span></span>
					<h6 className='section_title_text'>Resume</h6>
				</Grid>

				<Grid item xs={12}>
					<Grid container className='resume_timeline'>
						{/* Experiences */}
						<Grid item sm={12} md={6}>
							<CustomTimeline title='Work Experience' icon={<WorkIcon />}>
								{resumeData.experiences.map((experience) => (
									<TimelineItem>
										<CustomTimelineSeparator />
										<TimelineContent className='timeline_content'>
											<Typography className='timeline_title'>
												{experience.title}
											</Typography>
											<Typography className='timeline_date' variant='caption'>
												{experience.date}
											</Typography>
											<Typography
												className='timeline_description'
												variant='body2'>
												{experience.description}
											</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>
						{/* Education */}
						<Grid item sm={12} md={6}>
							<CustomTimeline title='Education' icon={<SchoolIcon />}>
								{resumeData.education.map((education) => (
									<TimelineItem>
										<CustomTimelineSeparator />
										<TimelineContent className='timeline_content'>
											<Typography className='timeline_title'>
												{education.title}
											</Typography>
											<Typography className='timeline_date' variant='caption'>
												{education.date}
											</Typography>
											<Typography
												className='timeline_description'
												variant='body2'>
												{education.description}
											</Typography>
										</TimelineContent>
									</TimelineItem>
								))}
							</CustomTimeline>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			{/* Services */}
			<Grid container className='section pb_45'>
				<Grid item className='section_title mb_30'>
					<span></span>
					<h6 className='section_title_text'>Services</h6>
				</Grid>

				<Grid item xs={12}>
					<Grid container spacing={3} justify='space-around'>
						{resumeData.services.map((service) => (
							<Grid item xs={12} md={3}>
								<div className='service'>
									<Icon className='service_icon'>{service.icon}</Icon>
									<Typography className='service_title' variant='h6'>
										{service.title}
									</Typography>
									<Typography className='service_description' variant='body2'>
										{service.description}
									</Typography>
								</div>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
			{/* Skills */}
			<Grid container className='section graybg pb_45 p_50'>
				<Grid item xs={12}>
					<Grid container justify='space-between' spacing={3}>
						{resumeData.skills.map((skill) => (
							<Grid item xs={12} sm={6} md={3}>
								<Paper elevation={0} className='skill'>
									<Typography variant='h6' className='skill_title'>
										{skill.title}
									</Typography>
									{skill.description.map((element) => (
										<Typography variant='body2' className='skill_description'>
											<TimelineDot
												variant={'outlined'}
												className='timeline_dot'
											/>
											{element}
										</Typography>
									))}
								</Paper>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
			{/* Contact */}
			<Grid container className='section pt_45 pb_45' spacing={6}>
				{/* Contact Form */}
				<Grid item xs={12} lg={7}>
					<Grid container>
						<Grid item className='section_title mb_30'>
							<span></span>
							<h6 className='section_title_text'>Contact Form</h6>
						</Grid>

						<form onSubmit={sendEmail}>
							<Grid item xs={12}>
								<Grid container spacing={3}>
									<Grid item xs={12} sm={6}>
										<TextField fullWidth name='name' label='name' id='name' />
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											fullWidth
											name='email'
											label='email'
											id='email'
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											fullWidth
											name='message'
											label='message'
											id='message'
											multiline
											rows={4}
										/>
									</Grid>
									<Grid item xs={12}>
										<CustomButton text='Submit' type='submit' />
									</Grid>
								</Grid>
							</Grid>
						</form>
					</Grid>
				</Grid>

				{/* Contact Information */}
				<Grid item xs={12} lg={5}>
					<Grid container>
						<Grid item className='section_title mb_30'>
							<span></span>
							<h6 className='section_title_text'>Contact Information</h6>
						</Grid>

						<Grid item xs={12}>
							<Grid container>
								<Grid item xs={12}>
									<Typography className='contactInfo_item'>
										<span>Phone:</span> {resumeData.phone}
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography className='contactInfo_item'>
										<span>email:</span> {resumeData.email}
									</Typography>
								</Grid>

								<Grid item xs={12}>
									<Grid container className='contactInfo_socialsContainer'>
										{Object.keys(resumeData.socials).map((key) => (
											<Grid item className='contactInfo_social'>
												<a href={resumeData.socials[key].link}>
													{resumeData.socials[key].icon}
												</a>
											</Grid>
										))}
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Resume;
