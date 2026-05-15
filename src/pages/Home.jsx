import { motion } from 'framer-motion';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const Home = () => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <Hero />
    <About />
  </motion.div>
);

export default Home;
