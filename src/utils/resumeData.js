/* eslint-disable import/no-anonymous-default-export */
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default {
	name: 'Raul',
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
};
