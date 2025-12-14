'use client';

import Link from 'next/link';
import styles from './JourneySection.module.css';
import { motion } from 'framer-motion';

export default function JourneySection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.journeySection}>
      <div className={styles.overlay}></div>
      <motion.div
        className={styles.content}
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.title}>Our journey began 30 years ago</h2>
        <Link href="/about" className={styles.storyButton}>
          Read our story
        </Link>
      </motion.div>
    </section>
  );
}
