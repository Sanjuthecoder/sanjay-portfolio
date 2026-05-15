import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [phase, setPhase] = useState('enter'); // enter → hold → exit

  useEffect(() => {
    // After logo animates in, hold briefly then exit
    const holdTimer = setTimeout(() => setPhase('exit'), 2400);
    return () => clearTimeout(holdTimer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== 'exit' && (
        <motion.div
          className="preloader"
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
        >
          {/* Particle orbs */}
          <div className="preloader__orb preloader__orb--1" />
          <div className="preloader__orb preloader__orb--2" />
          <div className="preloader__orb preloader__orb--3" />

          {/* Grid */}
          <div className="preloader__grid" />

          {/* Main logo */}
          <div className="preloader__center">
            {/* Spinning rings */}
            <motion.div
              className="preloader__ring preloader__ring--outer"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="preloader__ring preloader__ring--inner"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />

            {/* Logo block */}
            <motion.div
              className="preloader__logo"
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {/* Bracket left */}
              <motion.span
                className="preloader__bracket"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                &lt;
              </motion.span>

              {/* Name — letter by letter */}
              <motion.span className="preloader__name">
                {'Sanjay\'s Portfolio'.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 + i * 0.045, duration: 0.3 }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.span>

              {/* Bracket right */}
              <motion.span
                className="preloader__bracket"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                /&gt;
              </motion.span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="preloader__tagline"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              Full-Stack Architect &amp; AI Innovator
            </motion.p>

            {/* Progress bar */}
            <motion.div className="preloader__bar-track">
              <motion.div
                className="preloader__bar-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 1.9, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
