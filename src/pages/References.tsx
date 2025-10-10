import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const ReferenceItem: React.FC<{ title: string; description: string; url: string }> = ({ title, description, url }) => (
    <div className="border-l-4 border-blue-500 pl-4 py-2">
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600 hover:underline">
            {title}
        </a>
        <p className="mt-1 text-gray-600">{description}</p>
    </div>
);

const References: React.FC = () => {
    return (
        <>
            <Seo
                title="References & Sources – Acrylis Ingredient Checker"
                description="Explore the scientific sources, dermatological resources, and community-driven data that power the Acrylis ingredient dictionary for acrylates and fungal acne."
                keywords="skincare research, dermatology sources, acrylates allergy study, malassezia folliculitis research, ingredient database sources"
            />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
                    <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">References & Sources 📚</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        The ingredient dictionaries used by Acrylis are compiled from reputable dermatological resources, scientific studies, and trusted community-driven databases. This page highlights some of the key sources that inform our analysis.
                    </p>
                    
                    <div className="mt-8 space-y-8 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acrylates Allergy</h2>
                            <div className="space-y-6">
                                <ReferenceItem 
                                    title="American Academy of Dermatology (AAD)"
                                    description="Provides clinical overviews and patient information on contact dermatitis, including allergens like acrylates found in cosmetics and medical devices."
                                    url="https://www.aad.org/public/diseases/eczema/contact-dermatitis"
                                />
                                <ReferenceItem 
                                    title="Contact Dermatitis Institute"
                                    description="Offers detailed information on various allergens, including isobornyl acrylate, and their sources."
                                    url="https://www.contactdermatitisinstitute.com/"
                                />
                                <ReferenceItem 
                                    title="DermNet NZ"
                                    description="A comprehensive resource providing information on the causes, symptoms, and treatment of allergic contact dermatitis to acrylates."
                                    url="https://dermnetnz.org/topics/allergy-to-acrylates"
                                />
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4 pt-4 border-t">Fungal Acne (Malassezia Folliculitis)</h2>
                            <div className="space-y-6">
                                <ReferenceItem 
                                    title="Simple Skincare Science"
                                    description="An extensively researched blog post that is widely considered the definitive guide on Malassezia folliculitis, including a master list of safe and unsafe ingredients."
                                    url="https://simpleskincarescience.com/pityrosporum-folliculitis-treatment-malassezia-cure/"
                                />
                                <ReferenceItem 
                                    title="Folliculitis Scout"
                                    description="A dedicated resource that provides tools and ingredient lists to help users identify products that are safe for those with Malassezia folliculitis."
                                    url="https://folliculitisscout.com/"
                                />
                                <ReferenceItem 
                                    title="National Center for Biotechnology Information (NCBI)"
                                    description="Scientific literature and research papers discussing the role of lipids in the growth of Malassezia yeast."
                                    url="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3969248/"
                                />
                            </div>
                        </section>

                        <div className="mt-8 pt-8 border-t text-center">
                            <p className="text-sm text-gray-600">This list is not exhaustive. We continuously review new research to keep our analyzer as accurate as possible.</p>
                            <div className="mt-4">
                                <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold">
                                    &rarr; Return to the Analyzer &larr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default References;
