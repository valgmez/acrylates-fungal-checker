import React from 'react';
import { HashRouter, Routes, Route, Outlet, Navigate, BrowserRouter } from 'react-router-dom';
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

const Layout: React.FC = () => (
  <div className="min-h-screen flex flex-col font-sans w-full">
    <Navbar />
    <div className="flex-grow w-full flex justify-center">
      <Outlet />
    </div>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="results" element={<Results />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="recommendations" element={<Recommendations />} />
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
