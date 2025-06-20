
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.section 
      className="home-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1>ようこそ、数学研究同好会へ！</h1>
      <p>ゼミ資料や活動を通じて、数学の魅力を一緒に発信していきましょう。</p>
    </motion.section>
  );
}

export default Home;
