import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Icon } from '@iconify/react';
import { skills } from '../../data/portfolio';
import './Skills.css';

const SkillIcon = ({ item, delay }) => (
  <motion.div
    className="skill-icon-item"
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ scale: 1.15, y: -4 }}
    title={item.name}
  >
    <div className="skill-icon-item__circle" style={{ '--icon-color': item.color }}>
      <Icon icon={item.icon} width={28} color={item.color} />
    </div>
    <span className="skill-icon-item__name">{item.name}</span>
  </motion.div>
);

const SkillCategory = ({ category, emoji, description, items, points, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="skill-category glass-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="skill-category__header">
        <div className="skill-category__emoji">{emoji}</div>
        <div>
          <h3 className="skill-category__title">{category}</h3>
          <p className="skill-category__desc">{description}</p>
        </div>
      </div>

      {/* Icon Grid */}
      <div className="skill-icon-grid">
        {items.map((item, i) => (
          <SkillIcon key={item.name} item={item} delay={i * 0.05} />
        ))}
      </div>

      {/* Points */}
      <ul className="skill-points">
        {points.map((point) => (
          <li key={point} className="skill-point">
            <span className="skill-point__dot" />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => (
  <section className="section skills" id="skills">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">My Arsenal</div>
        <h2>
          Technologies I <span className="gradient-text">Master</span>
        </h2>
        <p className="skills__subtitle">
          A curated set of tools I use to build scalable, production-grade systems
        </p>
      </div>

      <div className="skills__grid">
        {skills.map((skill, i) => (
          <SkillCategory key={skill.category} {...skill} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
