import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';

const Layout: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center font-sans w-full">
    <Navbar />
    <Outlet />
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;