
import React, { useState } from 'react';
import { generateCareerTips } from '../services/geminiService';
import Button from '../components/Button';
import ReactMarkdown from 'react-markdown';

const BlogPage: React.FC = () => {
    const [tips, setTips] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleGenerateTips = async () => {
        setIsLoading(true);
        setError('');
        try {
            const generatedTips = await generateCareerTips();
            setTips(generatedTips);
        } catch (err) {
            setError('An error occurred while fetching tips.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">AI-Powered Career Tips</h1>
                <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary mb-8">
                    Get the latest advice on job hunting, resumes, interviews, and more, powered by Gemini.
                </p>
                <Button onClick={handleGenerateTips} disabled={isLoading}>
                    {isLoading ? 'Generating...' : 'Generate Fresh Career Tips'}
                </Button>
            </div>

            <div className="max-w-3xl mx-auto mt-12">
                {isLoading && (
                     <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                )}
                {error && <p className="text-center text-red-500">{error}</p>}
                {tips && (
                    <div className="prose dark:prose-invert lg:prose-xl max-w-none p-6 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg shadow-md">
                        <ReactMarkdown>{tips}</ReactMarkdown>
                    </div>
                )}
                 {!tips && !isLoading && (
                     <div className="text-center p-8 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg">
                        <p className="text-light-text-secondary dark:text-dark-text-secondary">Click the button to generate career tips!</p>
                    </div>
                 )}
            </div>
        </div>
    );
};

export default BlogPage;
