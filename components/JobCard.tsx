
import React from 'react';
import { Link } from 'react-router-dom';
import { Job, Company } from '../types';
import { COMPANIES } from '../constants';
import Button from './Button';

interface JobCardProps {
    job: Job;
}

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    const company = COMPANIES.find(c => c.id === job.companyId) as Company;

    return (
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-light-border dark:border-dark-border flex flex-col justify-between">
            <div>
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start">
                        <img src={company.logoUrl} alt={`${company.name} logo`} className="w-16 h-16 rounded-md mr-4" />
                        <div>
                            <h3 className="text-lg font-bold text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary transition-colors">
                                <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                            </h3>
                            <p className="text-md text-light-text-secondary dark:text-dark-text-secondary">{company.name}</p>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-2">
                    {job.description}
                </p>
                <div className="flex flex-wrap gap-2 text-sm mb-4">
                    <span className="flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                        <LocationIcon /> {job.city}
                    </span>
                    <span className="flex items-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                        <ClockIcon /> {job.type}
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-light-border dark:border-dark-border">
                <p className="text-sm font-semibold text-primary">{job.salaryRange}</p>
                <Link to={`/jobs/${job.id}`}>
                   <Button variant="primary">View Details</Button>
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
