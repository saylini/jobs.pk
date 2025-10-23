
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">About Jobs.pk</h1>
                    <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8">
                        Connecting Talent with Opportunity Across Pakistan.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://picsum.photos/seed/about/600/400" alt="Office meeting" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                                Our mission is to bridge the gap between talented professionals and Pakistan's leading companies. We strive to create a platform that is not only efficient and user-friendly but also a source of inspiration and guidance for every job seeker.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Our Vision</h2>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                                We envision a future where every individual in Pakistan has access to the career opportunities they deserve. Jobs.pk aims to be the catalyst for professional growth and economic prosperity by fostering a dynamic and transparent job market.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto mt-20 text-center">
                    <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                         <div className="text-center">
                             <img src="https://picsum.photos/seed/team1/200/200" alt="Team member" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
                             <h3 className="text-xl font-semibold">Fatima Khan</h3>
                             <p className="text-primary">CEO & Founder</p>
                         </div>
                         <div className="text-center">
                             <img src="https://picsum.photos/seed/team2/200/200" alt="Team member" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
                             <h3 className="text-xl font-semibold">Bilal Ahmed</h3>
                             <p className="text-primary">Head of Technology</p>
                         </div>
                         <div className="text-center">
                             <img src="https://picsum.photos/seed/team3/200/200" alt="Team member" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
                             <h3 className="text-xl font-semibold">Ayesha Malik</h3>
                             <p className="text-primary">Director of Marketing</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
