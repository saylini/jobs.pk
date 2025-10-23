
import React from 'react';
import { Job, Company, Category } from './types';

// SVG Icons
export const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
export const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);
export const MegaphoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.875 9.475-4.645A1.003 1.003 0 0017 0H5.76a1 1 0 00-.958.744l-2.32 6.879a1 1 0 00.958 1.256h6.844z" />
    </svg>
);
export const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);
export const AcademicCapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
    </svg>
);
export const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);
export const GlobeAltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 9a9 9 0 00-9-9" />
    </svg>
);


export const CATEGORIES: Category[] = [
    { name: 'IT', icon: <CodeIcon /> },
    { name: 'Marketing', icon: <MegaphoneIcon /> },
    { name: 'Finance', icon: <ChartBarIcon /> },
    { name: 'Education', icon: <AcademicCapIcon /> },
    { name: 'Healthcare', icon: <HeartIcon /> },
    { name: 'Remote', icon: <GlobeAltIcon /> },
];

export const COMPANIES: Company[] = [
    { id: 'c1', name: 'Techlogix', logoUrl: 'https://picsum.photos/seed/techlogix/100/100', location: 'Lahore, Pakistan', rating: 4.8 },
    { id: 'c2', name: 'Systems Limited', logoUrl: 'https://picsum.photos/seed/systems/100/100', location: 'Karachi, Pakistan', rating: 4.9 },
    { id: 'c3', name: 'Nishat Group', logoUrl: 'https://picsum.photos/seed/nishat/100/100', location: 'Islamabad, Pakistan', rating: 4.5 },
    { id: 'c4', name: 'Engro Corporation', logoUrl: 'https://picsum.photos/seed/engro/100/100', location: 'Karachi, Pakistan', rating: 4.7 },
];

export const JOBS: Job[] = [
    {
        id: 'j1',
        title: 'Senior React Developer',
        companyId: 'c1',
        city: 'Lahore',
        category: 'IT',
        type: 'Full-time',
        salaryRange: 'PKR 200,000 - 300,000 / month',
        experience: '3-5 years',
        description: 'We are looking for a seasoned React Developer to join our dynamic team. You will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack.',
        qualifications: ['B.S. in Computer Science or related field.', 'In-depth knowledge of JavaScript, CSS, HTML, and front-end languages.', 'Experience with user interface design.', 'Knowledge of performance testing frameworks including Mocha and Jest.'],
        postedDate: '2024-07-20'
    },
    {
        id: 'j2',
        title: 'Digital Marketing Manager',
        companyId: 'c2',
        city: 'Karachi',
        category: 'Marketing',
        type: 'Full-time',
        salaryRange: 'PKR 150,000 - 250,000 / month',
        experience: '4+ years',
        description: 'Lead our digital marketing team to enhance our brand presence. Develop, implement, and manage marketing campaigns that promote our company and its products.',
        qualifications: ['Proven working experience in digital marketing.', 'Demonstrable experience leading and managing SEO/SEM, marketing database, email, social media and/or display advertising campaigns.', 'Highly creative with experience in identifying target audiences and devising digital campaigns that engage, inform and motivate.'],
        postedDate: '2024-07-19'
    },
    {
        id: 'j3',
        title: 'Financial Analyst',
        companyId: 'c3',
        city: 'Islamabad',
        category: 'Finance',
        type: 'Full-time',
        salaryRange: 'PKR 120,000 - 180,000 / month',
        experience: '2-3 years',
        description: 'Seeking a detail-oriented Financial Analyst to provide accurate and data-based information on company’s profitability, solvency, stability and liquidity.',
        qualifications: ['Proven experience as a Financial Analyst.', 'Experience in financial modeling.', 'Proficient in spreadsheets, databases, MS Office and financial software applications.', 'BS degree in Finance, Economics or related field.'],
        postedDate: '2024-07-18'
    },
    {
        id: 'j4',
        title: 'Remote Customer Support Specialist',
        companyId: 'c4',
        city: 'Remote',
        category: 'Remote',
        type: 'Remote',
        salaryRange: 'PKR 80,000 - 110,000 / month',
        experience: '1-2 years',
        description: 'Join our fully remote team as a Customer Support Specialist. You will be the first point of contact for our customers, providing helpful information, answering questions, and responding to complaints.',
        qualifications: ['Excellent communication and problem-solving skills.', 'Ability to work independently in a remote setup.', 'Experience with CRM software is a plus.', 'Patient and empathetic attitude.'],
        postedDate: '2024-07-21'
    },
    {
        id: 'j5',
        title: 'Backend Node.js Engineer',
        companyId: 'c1',
        city: 'Lahore',
        category: 'IT',
        type: 'Full-time',
        salaryRange: 'PKR 180,000 - 280,000 / month',
        experience: '3+ years',
        description: 'We are seeking an experienced Node.js developer to build and maintain scalable backend services and APIs.',
        qualifications: ['Strong proficiency with JavaScript and TypeScript.', 'Experience with Node.js and frameworks available for it (such as Express).', 'Understanding the nature of asynchronous programming.', 'Experience with databases like PostgreSQL, MongoDB.'],
        postedDate: '2024-07-22'
    },
    {
        id: 'j6',
        title: 'Content Marketing Specialist',
        companyId: 'c2',
        city: 'Karachi',
        category: 'Marketing',
        type: 'Contract',
        salaryRange: 'PKR 90,000 - 130,000 / month',
        experience: '2-4 years',
        description: 'Create compelling blog posts, white papers, product descriptions, social media content, and web copy.',
        qualifications: ['Proven work experience as a Content Marketing Specialist.', 'Portfolio of published articles.', 'Excellent writing and editing skills in English.', 'Experience with WordPress and SEO is a plus.'],
        postedDate: '2024-07-15'
    }
];
