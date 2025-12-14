'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DisputeResolution() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <motion.h1
            className={styles.title}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            Dispute Resolution & Litigation
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            for-civil-disputes-property-litigation-cheque-bounce-fir-complaint-guidance
          </motion.p>
        </div>

        <div className={styles.content}>
          <motion.section
            className={styles.section}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Service Overview</h2>
            <p>Content will be added here...</p>
          </motion.section>

          <motion.section
            className={styles.section}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2>What We Offer</h2>
            <p>Content will be added here...</p>
          </motion.section>

          <motion.section
            className={styles.section}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Why Choose Us</h2>
            <p>Content will be added here...</p>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}
