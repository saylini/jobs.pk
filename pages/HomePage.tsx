
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, JOBS, COMPANIES } from '../constants';
import JobCard from '../components/JobCard';
import Button from '../components/Button';

const HomePage: React.FC = () => {
    const latestJobs = JOBS.slice(0, 4);
    const topEmployers = COMPANIES.slice(0, 4);

    return (
        <div className="space-y-16 md:space-y-24">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-[50vh] md:h-[60vh] flex items-center justify-center text-center text-white" style={{ backgroundImage: `url('https://picsum.photos/seed/pakistan-job/1600/900')` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">Discover Jobs You’ll Love in Pakistan.</h1>
                    <p className="text-lg md:text-xl mb-8 animate-fade-in-up">Find Your Next Opportunity in Pakistan.</p>
                    <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                        <form className="grid grid-cols-1 md:grid-cols-4 gap-2">
                            <input type="text" placeholder="Job Title or Skill" className="col-span-1 md:col-span-2 p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary" />
                            <input type="text" placeholder="City" className="p-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary" />
                            <Link to="/jobs" className="w-full">
                                <Button className="w-full h-full text-base">Search Jobs</Button>
                            </Link>
                        </form>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Job Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {CATEGORIES.map((category) => (
                        <Link key={category.name} to="/jobs" className="block text-center p-6 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="text-primary text-4xl mx-auto mb-2">{category.icon}</div>
                            <h3 className="font-semibold">{category.name}</h3>
                        </Link>
                    ))}
                </div>
            </section>
            
            {/* Latest Jobs */}
            <section className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Jobs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {latestJobs.map(job => <JobCard key={job.id} job={job} />)}
                </div>
                <div className="text-center mt-8">
                    <Link to="/jobs">
                        <Button variant="outline">View All Jobs</Button>
                    </Link>
                </div>
            </section>

            {/* Top Employers */}
            <section className="bg-light-bg-secondary dark:bg-dark-bg-secondary py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Top Employers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {topEmployers.map(company => (
                             <div key={company.id} className="flex flex-col items-center justify-center p-6 bg-light-bg dark:bg-dark-bg rounded-lg shadow-sm">
                                <img src={company.logoUrl} alt={company.name} className="h-20 w-20 object-contain mb-4 rounded-full"/>
                                <h3 className="font-semibold text-center">{company.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
