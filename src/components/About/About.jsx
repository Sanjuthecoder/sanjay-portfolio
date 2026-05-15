import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiBriefcase, FiAward, FiBookOpen } from 'react-icons/fi';
import { stats } from '../../data/portfolio';
import { useCountUp } from '../../hooks/useCountUp';
import './About.css';

const icons = [FiCode, FiBriefcase, FiAward, FiBookOpen];

const StatCard = ({ value, label, suffix, icon: Icon, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(inView ? value : 0, 1500);

  return (
    <motion.div
      ref={ref}
      className="stat-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="stat-card__icon">
        <Icon size={22} />
      </div>
      <div className="stat-card__value">
        {count}{suffix}
      </div>
      <div className="stat-card__label">{label}</div>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="about__inner">
          {/* Text Side */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">About Me</div>
            <h2 className="about__title">
              Crafting the Future with <span className="gradient-text">Code & AI</span>
            </h2>
            <p className="about__bio">
              I'm <strong>Sanjay Sharma</strong>, a Full-Stack Architect and AI Innovator based in Dausa, Rajasthan. 
              Currently pursuing a Post Graduate Diploma in Advanced Computing at <strong>CDAC-ACTS</strong>, 
              I hold a B.Tech in Electrical Engineering from <strong>IIEST, Shibpur</strong>.
            </p>
            <p className="about__bio">
              My passion lies at the intersection of <strong>Generative AI</strong>, <strong>distributed systems</strong>, 
              and <strong>Web3 technologies</strong>. I architect systems that don't just solve problems — they 
              redefine how problems are approached.
            </p>

            <div className="about__highlights">
              {[
                { icon: '🤖', text: 'Generative AI (Gemini 2.5, OpenAI)' },
                { icon: '⚙️', text: 'Spring Boot Microservices Architecture' },
                { icon: '🌐', text: 'Web3 & Decentralized Storage (IPFS)' },
                { icon: '📱', text: 'React 18, Next.js 16, TypeScript' },
              ].map(({ icon, text }) => (
                <div key={text} className="about__highlight-item">
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Side */}
          <motion.div
            className="about__stats"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {stats.map((s, i) => (
              <StatCard
                key={s.label}
                {...s}
                icon={icons[i]}
                delay={i * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
