import React from "react";
import { useParams, Link } from "react-router-dom";
import Seo from "../../components/Seo";
import { getPostBySlug } from "../../data/blogPosts";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <>
        <Seo
          title="Post Not Found – Acrylis Blog"
          description="The blog post you are looking for does not exist."
          keywords=""
        />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto bg-acrylis-mist/70 p-8 rounded-lg shadow text-center">
            <h1 className="text-3xl font-extrabold text-acrylis-deep tracking-tight">
              Post Not Found
            </h1>
            <p className="mt-4 text-gray-600">
              The blog post you are looking for does not exist or has been
              removed.
            </p>
            <Link
              to="/blog"
              className="mt-6 inline-block text-acrylis hover:text-acrylis-deep font-semibold"
            >
              &larr; Back to Blog
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Seo
        title={`${post.title} – Acrylis Blog`}
        description={post.description}
        keywords={post.keywords}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="max-w-4xl mx-auto bg-acrylis-mist/70 p-8 rounded-lg shadow">
          <header>
            <div className="flex items-center gap-3 mb-4">
              <Link
                to="/blog"
                className="text-sm text-gray-400 hover:text-acrylis transition-colors"
              >
                &larr; Blog
              </Link>
            </div>
            <span className="inline-block bg-acrylis-lilac text-acrylis-deep text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
              {post.category}
            </span>
            <h1 className="text-3xl font-extrabold text-acrylis-deep tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <span>{post.author}</span>
              <span>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </header>

          <div
            className="mt-8 prose prose-acrylis max-w-none prose-headings:font-bold prose-headings:text-acrylis-deep prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-800 prose-a:text-acrylis prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="mt-12 pt-8 border-t space-y-3 text-center">
            <Link
              to="/blog"
              className="block text-acrylis hover:text-acrylis-deep font-semibold"
            >
              &larr; Back to Blog
            </Link>
            <Link
              to="/"
              className="bg-acrylis text-white px-8 py-3 rounded-full font-bold hover:bg-acrylis-deep transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 transition-transform transform hover:scale-105"
            >
              Try the Ingredient Analyzer
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
};

export default BlogPost;
