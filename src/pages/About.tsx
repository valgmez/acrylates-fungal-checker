import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const About: React.FC = () => {
    return (
        <>
            <Seo 
                title="About Acrylis – Our Mission for Safer Skincare"
                description="Learn about the mission behind Acrylis. Discover why we created this free ingredient analyzer for acrylates allergies and fungal acne, and how we're dedicated to empowering consumers."
                keywords="about acrylis, skincare safety, cosmetic ingredient checker, our mission, fungal acne tool, acrylates allergy help"
            />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
                    <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">About Acrylis 💁‍♀️</h1>
                    <p className="mt-4 text-lg text-gray-600">Our mission is to make skincare safer and easier for everyone. 💖</p>
                    
                    <div className="mt-6 text-gray-700 space-y-4">
                        <p>
                            Acrylis was created to solve a common problem for people with sensitive skin: deciphering complicated ingredient lists. If you're dealing with an <strong>acrylates allergy</strong> or trying to avoid triggers for <strong>fungal acne (Malassezia folliculitis)</strong>, reading the back of a product can feel like an impossible task.
                        </p>
                        <p>
                            This tool simplifies the process. We maintain a comprehensive, offline dictionary of known acrylates, cross-reactors, and fungal acne triggers based on dermatological research and community-driven data. By pasting an ingredient list into our analyzer, you get an instant, easy-to-understand breakdown of potentially problematic components.
                        </p>
                        <p>
                            Our goal is to empower you to make informed decisions about the products you use, without the need for endless research.
                        </p>
                        <div className="mt-8 text-center">
                            <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold">
                                &rarr; Check your ingredients with Acrylis &larr;
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;
