
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Abhinav",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Abhinav",
	description: "A Data Scientist and Machine Learning Engineer.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/open?id=17POQLu-2GZhW8vvDK6VuQ0z96FlgWDOs&authuser=abbajpai%40iu.edu&usp=drive_fs",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"Hi, my career spanning over 12 years has involved working on analytical projects of varying complexity and scale for clients in different industries. In my previous role as a Manager with Deloitte, I was part of model risk management team and mostly focused on developing and validating credit risk models for top banks in the world. Moreover, I have worked on data analytics projects related to Anti-Money Laundering, Cyber Risk, Safety Recall, Fraud Investigations, Portfolio Valuation and Working Capital Optimization.I am currently pursuing a full-time master's degree in Data Science at Indiana University. I am also collaborating with researchers at Lu Laboratory, developing high-performance computing workflows for their ongoing neuroscience research projects.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Data Science Solutions",
			description: "Transforms business outcomes by envisioning and executing innovative analytics strategies<",
			icons: null,
		},
		{
			title: "Machine Learning",
			description: "Develop and deploy machine learning models",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Voice of Customers",
			description: "A text mining application to understand the opinions of cellphone users in the US market",
			icons: [
				{
					icon: faAppStore,
					link: "https://github.com/AbhiAdroitML/grad_work/tree/main/voice_of_customer",
				},
				{
					icon: faGithub,
					link: "https://github.com/AbhiAdroitML/grad_work/tree/main/voice_of_customer",
				},
			]
		},
		{
			title: "Machine Learning For Imbalanced Datasets",
			description: "Predicting Company Bankruptcy",
			icons: [
				{
					icon: faAppStore,
					link: "https://github.com/AbhiAdroitML/grad_work/tree/main/imbalanced_dataset_ml",
				},
				{
					icon: faGooglePlay,
					link: "https://github.com/AbhiAdroitML/grad_work/tree/main/imbalanced_dataset_ml",
				},
			]
		},
		{
			title: "Fraud Detection",
			description: "A Network Analysis Approach to Detect Collusive Fraud in Procurement Proces",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/AbhiAdroitML/grad_work/tree/main/fraud_detection",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at abhinav.bajpai1@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:abhinav.bajpai1@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Abhinav Bajpai | Data Science Solutions | ML Ops & AI Infrastructure Design | Strategic Decision Making",
	description: "I am pursuing a Master of Science in Data Science from Indiana University - Bloomington.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@abhiadroit",
	description: "Data Science Solutions | ML Ops & AI Infrastructure Design | Strategic Decision Making | Stakeholder Management",
	cards: [
		{
			title: "My website",
			link: "https://abbajpai.pages.iu.edu",
		},
		{
			title: "Voice of Customers",
			link: "https://github.com/AbhiAdroitML/grad_work/tree/main/voice_of_customer",
		},
		{
			title: "Fraud Detection",
			link: "https://github.com/AbhiAdroitML/grad_work/tree/main/fraud_detection",
		},
		{
			title: "My GitHub",
			link: "https://github.com/AbhiAdroitML/",
		},
		{
			title: "My LinkedIn",
			link: "linkedin.com/in/bajpaiabhinav",
		},
	]
}
