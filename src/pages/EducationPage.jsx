import { motion } from 'framer-motion';
import Education from '../components/Education/Education';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const EducationPage = () => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <Education />
    </div>
  </motion.div>
);

export default EducationPage;
