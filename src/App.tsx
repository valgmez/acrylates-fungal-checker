import React from 'react';
import { Routes, Route, Outlet, Navigate, BrowserRouter } from 'react-router-dom';
import { useAnalytics } from './hooks/useAnalytics';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Recommendations from './pages/Recommendations';
import References from './pages/References';
import Results from './pages/Results';
import HowItWorks from './pages/HowItWorks';
import BlogIndex from './pages/blog/BlogIndex';
import BlogPost from './pages/blog/BlogPost';

const Layout: React.FC = () => {
  useAnalytics();
  return (
    <div className="min-h-screen flex flex-col font-inter w-full bg-acrylis-glass/10">
      <Navbar />
      <div className="flex-grow w-full flex justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="results" element={<Results />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="recommendations" element={<Recommendations />} />
          <Route path="about" element={<About />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="faq" element={<Faq />} />
          <Route path="references" element={<References />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
