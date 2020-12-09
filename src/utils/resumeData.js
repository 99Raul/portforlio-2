/* eslint-disable import/no-anonymous-default-export */
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { WebOutlined } from '@material-ui/icons';
import PhotoIcon from '@material-ui/icons/Photo';
import BuildIcon from '@material-ui/icons/Build';

import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';

import OpenInNewIcon from '@material-ui/icons/OpenInNew';

export default {
	name: 'Raul Salazar',
	title: 'Full stack developer',
	birthday: '02 December 1996',
	email: 'rauljr96@gmail.com',
	phone: '619-379-3792',

	socials: {
		Linkedln: {
			link: 'https://www.linkedin.com/in/raul-salazar-jr/',
			text: 'raul_salazar',
			icon: <LinkedInIcon />,
		},
		Github: {
			link: 'https://github.com/99Raul',
			text: '99raul',
			icon: <GitHubIcon />,
		},
	},
	about:
		'I am a junior software engineer with a background in construction. I have experience with planning projects and managing cost, labor while meeting and exceeding my goals. I am a self starter, always looking for opportunities to learn and develop new skills. My long term objective is to be on a team working on a large scale app, with an emphasis on functionality. My goal is to build intuitive, user-friendly applications , and to ultimately influence the user experience.',
	experiences: [
		{
			title: 'Concrete Carpenter',
			date: '2015-2019',
			description:
				'Read and interpreted blueprints and construction documents to determine project directives. \n Planned and executed work with proper tools and materials to maximize efficiency. \n Followed and established job site safety regulations and maintained safe and clean work area.',
		},
	],
	education: [
		{
			title: 'Miramar College',
			date: '2015-2017',
			description: '',
		},
		{
			title: 'San Diego State',
			date: '2018-Present',
			description: '',
		},
		{
			title: 'General Assembly',
			date: '2020',
			description:
				'Fullstack software engineering immersive, consisted in learning and building apps using javascript, html, css, python, django, mongodB, sql, react_js and nodejs.',
		},
	],
	services: [
		{
			title: 'Web developer',
			description: 'Growing web developer',
			icon: <WebOutlined />,
		},
		{
			title: 'Photoshop',
			description: 'Photo editing',
			icon: <PhotoIcon />,
		},
		{
			title: 'Handyman',
			description:
				'Able to do tasks outside of coding like, electrical, carpentry, installation, mechanical.',
			icon: <BuildIcon />,
		},
	],

	skills: [
		{
			title: 'Front End',
			description: [
				'React js',
				'Javascript/jQuery',
				'Html',
				'Css',
				'Bootstrap',
				'Material Ui',
				'Git/Github',
				'Testing/Debugging',
			],
		},
		{
			title: 'Back End',
			description: ['Node Js', 'Python', 'Django', 'Express'],
		},
		{
			title: 'Databases',
			description: ['psql', 'mongoDb', 'Aws', 'Atlas'],
		},
	],

	projects: [
		{
			tag: 'React',
			image: project1,
			title: 'React Project 1',
			caption: 'covid 19 tracker',
			description:
				'This data app tracker shows the numbers and trends of people affected, recovered and decreased due to Covid-19',
			links: [
				{
					link: 'https://agile-journey-16354.herokuapp.com',
					icon: <OpenInNewIcon />,
				},
				{
					link: 'https://github.com/99Raul/covid-app',
					icon: <GitHubIcon />,
				},
			],
		},
		{
			tag: 'React',
			image: project2,
			title: 'React Project 2',
			caption: 'code share snippet',
			description:
				'Application where users can post and share code snippets. Users can post their own code snippets to save for future use and ease of accessability. Instead of digging through old projects and assignments to find a certain function you wrote, it could be saved on the app for quick reference.',
			links: [
				{
					link: 'https://99raul.github.io/front-end-group/',
					icon: <OpenInNewIcon />,
				},
				{
					link: 'https://github.com/99Raul/front-end-group',
					icon: <GitHubIcon />,
				},
			],
		},
		{
			tag: 'React/Python',
			image: project3,
			title: 'React/Python Project 3',
			caption: 'social dev posts',
			description:
				'This app is where developers can log in and ask questions about software engineering topics, and people can comment on the questions.',
			links: [
				{
					link: 'https://dev-questions-app.netlify.app/',
					icon: <OpenInNewIcon />,
				},
				{
					link: 'https://github.com/99Raul/interview-social-backend',
					icon: <GitHubIcon />,
				},
			],
		},
		{
			tag: 'React/Ai',
			image: project4,
			title: 'React/Ai Project 4',
			caption: 'ai news application',
			description:
				'This app is where it utilizes alan ai voice assistant to get global news',
			links: [
				{
					link: 'https://alan-ai-react.netlify.app',
					icon: <OpenInNewIcon />,
				},
				{
					link: 'https://github.com/99Raul/React-AI-News-App',
					icon: <GitHubIcon />,
				},
			],
		},
	],
};
