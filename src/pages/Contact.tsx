import React from 'react';

const Contact: React.FC = () => {
    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
                <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Contact Us</h1>
                <p className="mt-4 text-lg text-gray-600">We'd love to hear from you.</p>
                
                <div className="mt-6 text-gray-700 space-y-4">
                    <p>
                        If you have any questions, feedback, or suggestions for improving Acrylis, please don't hesitate to reach out. We are always looking for ways to make this tool better and more helpful for the community.
                    </p>
                    <p>
                        For general inquiries or to report an issue, please send an email to:
                    </p>
                    <div className="mt-2">
                        <a 
                            href="mailto:contact@acrylis.cc" 
                            className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                        >
                            contact@acrylis.cc
                        </a>
                    </div>
                    <p>
                        We do our best to respond to all messages as quickly as possible. Thank you for using Acrylis!
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Contact;