import { motion } from 'framer-motion';
import Projects from '../components/Projects/Projects';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const ProjectsPage = () => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <Projects />
    </div>
  </motion.div>
);

export default ProjectsPage;
