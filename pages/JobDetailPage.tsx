
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOBS, COMPANIES } from '../constants';
import { Job, Company } from '../types';
import Button from '../components/Button';
import NotFoundPage from './NotFoundPage';

const JobDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const job = JOBS.find(j => j.id === id);

    if (!job) {
        return <NotFoundPage />;
    }

    const company = COMPANIES.find(c => c.id === job.companyId) as Company;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg shadow-xl overflow-hidden">
                <div className="p-8">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-6 border-b border-light-border dark:border-dark-border pb-6">
                        <div className="flex items-start">
                            <img src={company.logoUrl} alt={`${company.name} logo`} className="w-20 h-20 rounded-lg mr-6" />
                            <div>
                                <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">{job.title}</h1>
                                <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">{company.name}</p>
                                <p className="text-md text-light-text-secondary dark:text-dark-text-secondary mt-1">{job.city} &bull; {job.type}</p>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-0 flex flex-col items-start sm:items-end space-y-2">
                             <p className="text-lg font-semibold text-primary">{job.salaryRange}</p>
                             <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">Posted on {new Date(job.postedDate).toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        <div className="md:col-span-2">
                             <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
                             <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">{job.description}</p>
                            
                             <h2 className="text-2xl font-semibold mt-8 mb-4">Qualifications</h2>
                             <ul className="list-disc list-inside text-light-text-secondary dark:text-dark-text-secondary space-y-2">
                                {job.qualifications.map((q, index) => <li key={index}>{q}</li>)}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <Button className="w-full text-lg py-3">Apply Now</Button>
                            <Button variant="outline" className="w-full">Save Job</Button>
                            <Button variant="secondary" className="w-full">Share</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <Link to="/jobs" className="text-primary hover:underline">
                    &larr; Back to all jobs
                </Link>
            </div>
        </div>
    );
};

export default JobDetailPage;
