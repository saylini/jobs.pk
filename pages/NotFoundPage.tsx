
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-primary">404</h1>
                <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
                <p className="mt-4 text-lg text-light-text-secondary dark:text-dark-text-secondary">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="mt-8">
                    <Link to="/">
                        <Button variant="primary">Go Back Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
