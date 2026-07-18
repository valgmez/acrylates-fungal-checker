import React, { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/c2e5d4df2d6a140d89da686480ec3e7c", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `New Contact Form Submission: ${formData.subject}`,
          subject: formData.subject,
          message: formData.message,
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Sorry, there was an issue sending your message. Please try again or email me directly at contact@acrylis.cc.");
      }
    } catch (error) {
      alert("Sorry, there was an issue sending your message. Please try again or email me directly at contact@acrylis.cc.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Seo
        title="Get in Touch – Acrylis Ingredient Analyzer"
        description="Have questions, feedback, or found an ingredient I missed? Get in touch with me. I'd love to hear from you and I typically respond within 48 hours."
        keywords="contact acrylis, skincare tool feedback, ingredient checker support, report a bug, suggest ingredient"
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto bg-acrylis-mist/70 p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-extrabold text-acrylis-deep tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            I'd love to hear from you!
          </p>

          <div className="mt-6 text-gray-700 space-y-4">
            <p>
              If you have any questions about how the analyser works, feedback
              on your experience, suggestions for new features, or if you've
              spotted a product that should be on the recommendations list,
              please don't hesitate to reach out. I built this tool to help
              people, and your feedback is what makes it better. Whether you've
              found a bug, have an idea for improvement, or just want to say hi
              — I read every message.
            </p>

            <div className="bg-acrylis-mist border border-gray-200 rounded-lg p-4 mt-6 shadow-md">
              <h2 className="text-lg font-semibold text-acrylis-deep mb-2">
                Send Me a Message
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                I typically respond within 48 hours. All fields are required.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg
                    className="w-12 h-12 text-green-500 mx-auto mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-lg font-semibold text-green-800">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-green-700 mt-1">
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-acrylis focus:border-acrylis text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-acrylis focus:border-acrylis text-sm"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-acrylis focus:border-acrylis text-sm"
                    >
                      <option value="">Select a topic...</option>
                      <option value="question">General Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="bug">Report a Bug or Issue</option>
                      <option value="database">
                        Suggest a Database Update
                      </option>
                      <option value="recommendation">Suggest a Product</option>
                      <option value="feature">Feature Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-acrylis focus:border-acrylis text-sm"
                      placeholder="Please describe your question, feedback, or suggestion in detail..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full sm:w-auto bg-acrylis text-white font-semibold py-2 px-6 rounded-lg hover:bg-acrylis-deep transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-8 border-t pt-6">
              <h2 className="text-lg font-semibold text-acrylis-deep mb-3">
                Other Ways to Reach Me
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  For general inquiries, you can also send an email directly to{" "}
                  <a
                    href="mailto:contact@acrylis.cc"
                    className="text-acrylis hover:text-acrylis-deep font-semibold"
                  >
                    contact@acrylis.cc
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  Please note: I'm not a medical professional and can't provide
                  medical advice about your specific skin condition. For medical
                  questions, please consult a qualified dermatologist or
                  allergist.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t text-center">
              <Link
                to="/"
                className="bg-acrylis text-white px-8 py-3 rounded-full font-bold hover:bg-acrylis-deep transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 transition-transform transform hover:scale-105"
              >
                Try the Ingredient Analyzer
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
