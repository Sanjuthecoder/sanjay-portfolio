import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Preloader from './components/Preloader/Preloader';
import Home from './pages/Home';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <>
      {/* Preloader — renders outside BrowserRouter so it covers everything */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Main app — hidden until preloader finishes */}
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <BrowserRouter>
          <CustomCursor />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
