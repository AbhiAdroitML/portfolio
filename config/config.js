
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faTeamspeak } from '@fortawesome/free-brands-svg-icons';
import { faAutomobile, faFileText, faMicroscope, faProjectDiagram, faUserGroup } from '@fortawesome/free-solid-svg-icons';

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
	description: "Analytics leader with 12+ years of client service experience in diverse\
	 industries across the analytics value chain. Proven track record of managing complex projects \
	 and global teams in driving digital transformation, deploying analytics and intelligent \
	 process automation delivering value to clients.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/17POQLu-2GZhW8vvDK6VuQ0z96FlgWDOs/view?usp=share_link",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"Hi, my career spanning over 12 years has involved working on analytical projects of varying complexity and scale for \
		clients in different industries. In my previous role as a Manager with Deloitte, I was part of \
		model risk management team and mostly focused on developing and validating credit risk models \
		for top banks in the world. Moreover, I have worked on data analytics projects related to \
		Anti-Money Laundering, Cyber Risk, Safety Recall, Fraud Investigations, Portfolio Valuation \
		and Working Capital Optimization. I am currently pursuing a full-time master's degree in Data Science at \
		Indiana University - Bloomington. I am also collaborating with researchers at Lu Laboratory, \
		developing high-performance computing workflows for their ongoing neuroscience research projects.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Data Science Solutions",
			description: "Transforms Business Outcomes by Envisioning and Executing Innovative Analytics Strategies",
			icons: null,
		},
		{
			title: "Machine Learning",
			description: "Develop and Deploy Machine Learning Models to Drive Operational Excellence",
			icons: null,
		},
		{
			title: "Process Automation",
			description: "Drive Automation and Optimization of Processes and Solutions",
			icons: null,
		},
		{
			title: "Project Management",
			description: "RFP, Resource Acquisition, Solution Architecture, Solution Deployment, and Real Time Tracking",
			icons: null,
		},
		{
			title: "Stakeholder Management",
			description: "Coordinate with Stakeholders, Manage Communications, Expectations, and Resolve Conflicts",
			icons: null,
		},
		{
			title: "Team Building",
			description: "Develop the Skills of Junior Analytics Professionals through Training and Coaching",
			icons: null,
		},
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Voice of Customers",
			description: "A Text Mining Application to Understand the Opinions of Cellphone Users",
			icons: [
				{
					icon: faFileText,
					link: "https://drive.google.com/file/d/17dBiQQh09fqdrbNXVjJmr_FH0ycyKilY/view?usp=share_link",
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
					icon: faFileText,
					link: "https://drive.google.com/file/d/17YultcIrSo_xoG5Qd8vJ12cA1LqOhxzR/view?usp=sharing",
				},
				{
					icon: faGithub,
					link: "https://github.com/AbhiAdroitML/grad_work/tree/main/imbalanced_dataset_ml",
				},
			]
		},
		{
			title: "Fraud Detection",
			description: "A Network Analysis Approach to Detect Collusive Fraud in Procurement Proces",
			icons: [
				{
					icon: faFileText,
					link: "https://drive.google.com/file/d/17Y3PbZNoonRtJqKrUX_nZGdQt7KfjT1D/view?usp=sharing",
				},
				{
					icon: faGithub,
					link: "https://github.com/AbhiAdroitML/grad_work/tree/main/fraud_detection",
				},
			]
		},
		{
			title: "Recommendation System",
			description: "Book Recommendation System using Graph Neural Network",
			icons: [
				{
					icon: faFileText,
					link: "https://drive.google.com/file/d/17cWHtS6SUyKAKZuGgCGxUFKGpwJRoRp1/view?usp=sharing",
				},
				{
					icon: faGithub,
					link: "https://github.com/AbhiAdroitML/grad_work/tree/main/recommendation_system",
				},
			]
		},
		{
			title: "Combinatorics - Trade Reconciliation (HPC)",
			description: "Shared and Distributed Programming",
			icons: [
				{
					icon: faFileText,
					link: "https://drive.google.com/file/d/17g1WtIid6tWe7UHUgE5Q3Iz56_9U_w7w/view?usp=share_link",
				},
				{
					icon: faGithub,
					link: "https://github.com/AbhiAdroitML/grad_work/tree/main/combinatorics_trade_reconciliation",
				},
			]
		},
		{
			title: "System Analysis & Design",
			description: "Case Study - MIS Specification for a Non-Profit Organization",
			icons: [
				{
					icon: faFileText,
					link: "https://drive.google.com/file/d/17g0TW5v1zw9Hb4uLWbiDFngcwDjq5hzm/view?usp=share_link",
				}
			]
		},
		{
			title: "Neuronal Cluster Detection",
			description: "ACM Publication - HPC Data Analysis Pipeline ",
			icons: [
				{
					icon: faMicroscope,
					link: "https://dl.acm.org/doi/10.1145/3491418.3535171",
				}
			]
		}
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to contact me directly by email at abhinav.bajpai1@gmail.com",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:abhinav.bajpai1@gmail.com",
			isPrimary: true,
		}
		//{
		//title: "Schedule Meeting",
		//link: "",
		//isPrimary: false,
		//},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Abhinav Bajpai | Data Science Solutions | ML Ops & AI Infrastructure Design | Strategic Decision Making",
	description: "Graduate Student at Indiana University - Bloomington Pursuing a Master's Degree in Data Science",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@abhiadroit",
	description: "Data Science Solutions | ML Ops & AI Infrastructure Design | Strategic Decision Making | Stakeholder Management",
	cards: [
		{
			title: "My GitHub",
			link: "https://github.com/AbhiAdroitML/",
		},
		{
			title: "My LinkedIn",
			link: "https://linkedin.com/in/bajpaiabhinav",
		},
	]
}
