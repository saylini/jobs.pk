
import React from 'react';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">Get In Touch</h1>
                <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary mb-12">
                    We'd love to hear from you. Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Form */}
                <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                            <input type="text" id="name" name="name" className="mt-1 block w-full p-3 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                            <input type="email" id="email" name="email" className="mt-1 block w-full p-3 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md shadow-sm focus:ring-primary focus:border-primary" />
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium">Message</label>
                            <textarea id="message" name="message" rows={5} className="mt-1 block w-full p-3 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md shadow-sm focus:ring-primary focus:border-primary"></textarea>
                        </div>
                        <div>
                            <Button type="submit" className="w-full">Submit</Button>
                        </div>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-3 text-light-text-secondary dark:text-dark-text-secondary">
                             <p><strong>Address:</strong> 123 Tech Avenue, Lahore, Pakistan</p>
                             <p><strong>Phone:</strong> +92 300 1234567</p>
                             <p><strong>Email:</strong> support@jobs.pk</p>
                        </div>
                    </div>
                    <div className="bg-light-bg-secondary dark:bg-dark-bg-secondary p-8 rounded-lg shadow-lg">
                         <h3 className="text-xl font-semibold mb-4">Office Location</h3>
                         <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                              <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.49244613236!2d74.0541999964478!3d31.48263523551524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690123456789!5m2!1sen!2s" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
