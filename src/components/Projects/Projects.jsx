import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/portfolio';
import './Projects.css';

const FILTERS = ['All', 'AI', 'Full-Stack', 'Web3'];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="project-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      layout
    >
      {/* Gradient banner */}
      <div
        className="project-card__banner"
        style={{ background: project.gradient }}
      >
        <span className="project-card__emoji">{project.emoji}</span>
        <div className="project-card__category-badge">{project.category}</div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {/* Tech tags */}
        <div className="project-card__tags">
          {project.tags.map((tag, i) => (
            <span
              key={tag}
              className="project-tag"
              style={{ '--tag-color': project.tagColors[i] || '#6C63FF' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="project-card__links">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="project-link project-link--github"
          >
            <FiGithub size={16} /> Source Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-link project-link--live"
            >
              <FiExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Engineering Masterpieces</div>
          <h2>
            Projects That <span className="gradient-text">Push Boundaries</span>
          </h2>
          <p>
            A showcase of high-impact applications where I've pushed the boundaries of Generative AI,
            Microservices, and Web3
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
              {activeFilter === f && (
                <motion.div
                  className="filter-btn__indicator"
                  layoutId="filter-indicator"
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div className="projects__grid" layout>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
