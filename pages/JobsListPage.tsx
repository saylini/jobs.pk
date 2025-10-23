
import React, { useState, useMemo } from 'react';
import { JOBS } from '../constants';
import JobCard from '../components/JobCard';
import { Job } from '../types';

const FilterSidebar = ({ onFilterChange }: { onFilterChange: (filters: any) => void }) => {
    // Dummy handler for UI demonstration
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // In a real app, you'd call onFilterChange here
        console.log({ [e.target.name]: e.target.value });
    };

    return (
        <aside className="w-full lg:w-1/4 p-6 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg shadow-md space-y-6 h-fit sticky top-20">
            <h3 className="text-xl font-bold border-b border-light-border dark:border-dark-border pb-2">Filter Jobs</h3>
            <div>
                <label htmlFor="category" className="block text-sm font-medium mb-1">Category</label>
                <select id="category" name="category" onChange={handleChange} className="w-full p-2 rounded-md bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:ring-primary focus:border-primary">
                    <option>All</option>
                    <option>IT</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                </select>
            </div>
             <div>
                <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                <select id="city" name="city" onChange={handleChange} className="w-full p-2 rounded-md bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:ring-primary focus:border-primary">
                    <option>All</option>
                    <option>Lahore</option>
                    <option>Karachi</option>
                    <option>Islamabad</option>
                    <option>Remote</option>
                </select>
            </div>
            <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-1">Experience Level</label>
                <select id="experience" name="experience" onChange={handleChange} className="w-full p-2 rounded-md bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border focus:ring-primary focus:border-primary">
                    <option>All</option>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                </select>
            </div>
             <div>
                <label className="block text-sm font-medium mb-2">Job Type</label>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <input id="remote" name="jobType" type="checkbox" onChange={handleChange} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        <label htmlFor="remote" className="ml-2 block text-sm">Remote</label>
                    </div>
                     <div className="flex items-center">
                        <input id="onsite" name="jobType" type="checkbox" onChange={handleChange} className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                        <label htmlFor="onsite" className="ml-2 block text-sm">On-site</label>
                    </div>
                </div>
            </div>
        </aside>
    );
};

const JobsListPage: React.FC = () => {
    const [jobs] = useState<Job[]>(JOBS);
    // In a real app, filters would be managed by state
    // const [filters, setFilters] = useState({});
    
    // const handleFilterChange = (newFilters) => {
    //     setFilters(prev => ({ ...prev, ...newFilters }));
    // };

    const filteredJobs = useMemo(() => {
        // Filtering logic would go here based on `filters` state
        return jobs;
    }, [jobs]);


    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-center mb-10">Find Your Dream Job</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                <FilterSidebar onFilterChange={() => {}} />
                <main className="w-full lg:w-3/4">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-light-text-secondary dark:text-dark-text-secondary">Showing {filteredJobs.length} jobs</p>
                         <select className="p-2 rounded-md bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-border dark:border-dark-border focus:ring-primary focus:border-primary">
                            <option>Sort by: Newest</option>
                            <option>Sort by: Most Relevant</option>
                            <option>Sort by: Company Name</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {filteredJobs.map(job => (
                           <JobCard key={job.id} job={job} />
                       ))}
                    </div>
                     {/* Pagination would go here */}
                </main>
            </div>
        </div>
    );
};

export default JobsListPage;
