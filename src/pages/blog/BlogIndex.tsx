import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo";
import { blogPosts } from "../../data/blogPosts";

const BlogIndex: React.FC = () => {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <Seo
        title="Blog – Skincare Education & Ingredient Guides"
        description="Articles on acrylates allergies, fungal acne (Malassezia folliculitis), safe skincare routines, patch testing, and how to read ingredient labels — written from personal experience."
        keywords="skincare blog, acrylates guide, fungal acne articles, safe skincare tips, ingredient education, personal allergy journey"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-acrylis-deep tracking-tight">
              Skincare Education Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              What I've learned about acrylates, fungal acne, safe skincare, and
              ingredient analysis — so you don't have to learn it the hard way.
            </p>
          </div>

          <div className="space-y-6">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block bg-acrylis-mist/70 rounded-lg shadow hover:shadow-md transition-shadow p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-acrylis-lilac text-acrylis-deep text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-acrylis-deep hover:text-acrylis transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {post.description}
                </p>
                <span className="mt-3 inline-block text-acrylis text-sm font-medium hover:underline">
                  Read article &rarr;
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center border-t pt-8">
            <Link
              to="/"
              className="bg-acrylis text-white px-8 py-3 rounded-full font-bold hover:bg-acrylis-deep transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 transition-transform transform hover:scale-105"
            >
              Try the Ingredient Analyzer
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogIndex;
