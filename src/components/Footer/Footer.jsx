import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-bracket">&lt;</span>
            <span className="footer__logo-name">Sanjay's Portfolio</span>
            <span className="footer__logo-bracket">/&gt;</span>
          </div>
          <p className="footer__tagline">
            Building the future, one commit at a time.
          </p>
          <div className="footer__social">
            <a
              href="https://github.com/Sanjuthecoder"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjay-sharma-29a18b31a/"
              target="_blank"
              rel="noreferrer"
              className="footer__social-link footer__social-link--linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav className="footer__nav">
          <h4 className="footer__nav-title">Quick Links</h4>
          <ul className="footer__nav-list">
            {[
              { to: '/', label: 'Home' },
              { to: '/skills', label: 'Skills' },
              { to: '/experience', label: 'Experience' },
              { to: '/education', label: 'Education' },
              { to: '/projects', label: 'Projects' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className="footer__nav-link" end={to === '/'}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact mini */}
        <div className="footer__contact">
          <h4 className="footer__nav-title">Contact</h4>
          <p className="footer__contact-item">📍 Dausa, Rajasthan, India</p>
          <p className="footer__contact-item">📞 +91 6376153144</p>
          <a
            href="/SanjaySharmaResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="footer__resume-link"
          >
            Download Resume →
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {year} Sanjay Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
