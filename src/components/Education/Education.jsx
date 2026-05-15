import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education, certifications } from '../../data/portfolio';
import './Education.css';

const DegreeCard = ({ item, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="degree-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ '--card-color': item.color }}
    >
      <div className="degree-card__top">
        <div className="degree-card__icon" style={{ background: item.color }}>
          {item.icon}
        </div>
        <div className="degree-card__badge">{item.duration}</div>
      </div>
      <h3 className="degree-card__institution">{item.institution}</h3>
      <p className="degree-card__degree">{item.degree}</p>
      <p className="degree-card__desc">{item.description}</p>
      <div className="degree-card__bar">
        <motion.div
          className="degree-card__bar-fill"
          style={{ background: item.color }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: index * 0.15 + 0.4, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

const CertCard = ({ cert, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="cert-card glass-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      style={{ '--cert-color': cert.color }}
    >
      <div className="cert-card__icon" style={{ color: cert.color }}>{cert.icon}</div>
      <h4 className="cert-card__title">{cert.title}</h4>
      <p className="cert-card__issuer">{cert.issuer}</p>
    </motion.div>
  );
};

const Education = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="section education" id="education">
      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Academic Background</div>
          <h2>
            My <span className="gradient-text">Education</span> Journey
          </h2>
        </motion.div>

        <div className="education__degrees">
          {education.map((item, i) => (
            <DegreeCard key={item.institution} item={item} index={i} />
          ))}
        </div>

        <motion.div
          className="education__certs-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="education__certs-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h3>
          <div className="education__certs-grid">
            {certifications.map((cert, i) => (
              <CertCard key={cert.title} cert={cert} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
