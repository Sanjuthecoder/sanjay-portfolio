import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/skills', label: 'Skills' },
  { path: '/experience', label: 'Experience' },
  { path: '/education', label: 'Education' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar__inner container">
          {/* Logo */}
          <NavLink to="/" className="navbar__logo">
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="navbar__logo-name">Sanjay's Portfolio</span>
            <span className="navbar__logo-bracket">/&gt;</span>
          </NavLink>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                  end={path === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            <button
              className="navbar__theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <a
              href="/SanjaySharmaResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="navbar__resume-btn"
            >
              Resume
            </a>
            <button
              className="navbar__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="mobile-menu__links">
              {navLinks.map(({ path, label }, i) => (
                <motion.li
                  key={path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                    }
                    end={path === '/'}
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42 }}>
                <a
                  href="/SanjaySharmaResume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-menu__resume"
                >
                  Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
