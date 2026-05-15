import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import { greeting } from '../../data/portfolio';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const particlesRef = useRef([]);

  const initParticles = useCallback((canvas) => {
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles(canvas);
    };
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ps = particlesRef.current;

      ps.forEach((p, i) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${p.alpha})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < ps.length; j++) {
          const q = ps[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initParticles]);

  const typingSequence = greeting.titles.flatMap(t => [t, 2000]).flat();

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero__canvas" />
      <div className="hero__grid-bg" />

      {/* Gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="container hero__content">
        {/* Badge */}
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero__badge-dot" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Hi, I'm <span className="gradient-text">{greeting.name}</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          className="hero__role-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <span className="hero__role-prefix">I'm a </span>
          <TypeAnimation
            sequence={typingSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="hero__role-text"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {greeting.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <a
            href={greeting.githubProfile}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            <FaGithub /> View GitHub
          </a>
          <a
            href={greeting.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn--outline"
          >
            <FiDownload /> Download CV
          </a>
        </motion.div>

        {/* Social pills */}
        <motion.div
          className="hero__social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a
            href={greeting.githubProfile}
            target="_blank"
            rel="noreferrer"
            className="hero__social-link"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <div className="hero__social-divider" />
          <a
            href={greeting.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="hero__social-link hero__social-link--linkedin"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </div>

      {/* Profile image */}
      <motion.div
        className="hero__image-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
      >
        <div className="hero__image-ring hero__image-ring--outer" />
        <div className="hero__image-ring hero__image-ring--inner" />
        <div className="hero__image-frame">
          <img src="/sanjaypic.jpg" alt="Sanjay Sharma" className="hero__image" />
        </div>
        <div className="hero__image-badge">
          <span>🚀</span>
          <span>Open to Work</span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="hero__scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;
