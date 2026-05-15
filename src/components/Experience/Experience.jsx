import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../../data/portfolio';
import './Experience.css';

const ExperienceCard = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const isLeft = index % 2 === 0;

  return (
    <div className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'}`}>
      {/* Timeline dot */}
      <motion.div
        className="timeline-dot"
        style={{ '--dot-color': item.color }}
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      />

      {/* Card */}
      <motion.div
        ref={ref}
        className="timeline-card glass-card"
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="timeline-card__top" style={{ '--exp-color': item.color }}>
          <div className="timeline-card__icon" style={{ background: item.color }}>
            {item.company[0]}
          </div>
          <div>
            <h3 className="timeline-card__title">{item.title}</h3>
            <p className="timeline-card__company">{item.company}</p>
          </div>
          <div className="timeline-card__duration">
            {item.duration}
          </div>
        </div>

        <p className="timeline-card__desc">{item.description}</p>

        <div className="timeline-card__tags">
          {item.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Career Journey</div>
          <h2>
            Where I've <span className="gradient-text">Built & Shipped</span>
          </h2>
          <p>{experience.description}</p>
        </motion.div>

        <div className="timeline">
          <div className="timeline__line" />
          {experience.items.map((item, i) => (
            <ExperienceCard key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
