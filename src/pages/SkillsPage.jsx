import { motion } from 'framer-motion';
import Skills from '../components/Skills/Skills';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const SkillsPage = () => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <Skills />
    </div>
  </motion.div>
);

export default SkillsPage;
