
import React from 'react';
import { JOBS } from '../constants';
import { Link } from 'react-router-dom';

const MiniJobCard = ({ job }: { job: (typeof JOBS)[0] }) => (
    <div className="p-4 bg-light-bg dark:bg-dark-bg rounded-lg border border-light-border dark:border-dark-border flex justify-between items-center">
        <div>
            <h4 className="font-semibold text-light-text dark:text-dark-text">{job.title}</h4>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{job.city}</p>
        </div>
        <Link to={`/jobs/${job.id}`} className="text-sm text-primary hover:underline">View</Link>
    </div>
);


const DashboardPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <h1 className="text-4xl font-bold">Welcome Back, User!</h1>
                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary">Here's your job hunting activity.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                     {/* Recommended Jobs */}
                    <section className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Jobs You May Like</h2>
                        <div className="space-y-4">
                            {JOBS.slice(0, 3).map(job => <MiniJobCard key={job.id} job={job} />)}
                        </div>
                    </section>
                    
                    {/* Application Status */}
                    <section className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg shadow-md">
                         <h2 className="text-2xl font-bold mb-4">Application Status</h2>
                         <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-light-border dark:border-dark-border">
                                    <tr>
                                        <th className="p-2">Job Title</th>
                                        <th className="p-2">Company</th>
                                        <th className="p-2">Date Applied</th>
                                        <th className="p-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-light-border dark:border-dark-border">
                                        <td className="p-2">Senior React Developer</td>
                                        <td className="p-2">Techlogix</td>
                                        <td className="p-2">July 21, 2024</td>
                                        <td className="p-2"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-200 text-yellow-800">Pending</span></td>
                                    </tr>
                                    <tr className="border-b border-light-border dark:border-dark-border">
                                        <td className="p-2">Digital Marketing Manager</td>
                                        <td className="p-2">Systems Limited</td>
                                        <td className="p-2">July 20, 2024</td>
                                        <td className="p-2"><span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-200 text-green-800">Reviewed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                         </div>
                    </section>
                </div>
                
                {/* Sidebar */}
                <aside className="space-y-8">
                    {/* Profile Card */}
                    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg shadow-md text-center">
                        <img src="https://picsum.photos/seed/user/100/100" alt="User" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Ali Ahmed</h3>
                        <p className="text-light-text-secondary dark:text-dark-text-secondary">Frontend Developer</p>
                        <button className="mt-4 text-sm text-primary hover:underline">Edit Profile</button>
                    </div>

                    {/* Saved Jobs */}
                    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-4">Saved Jobs</h3>
                        <div className="space-y-3">
                           {JOBS.slice(3, 5).map(job => (
                               <div key={job.id}>
                                   <Link to={`/jobs/${job.id}`} className="font-semibold hover:text-primary">{job.title}</Link>
                                   <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">{job.city}</p>
                               </div>
                           ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default DashboardPage;
