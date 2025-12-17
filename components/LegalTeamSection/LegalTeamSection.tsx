'use client';

import Link from 'next/link';
import styles from './LegalTeamSection.module.css';
import { motion } from 'framer-motion';

export default function LegalTeamSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/about" className={styles.teamCard}>
            <div className={styles.imageWrapper}>
              <img
                src="/home/WhatsApp Image 2025-12-16 at 1.15.59 AM.jpeg"
                alt="Our Legal Team"
                className={styles.teamImage}
              />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.title}>Our Legal Team</h2>
              <div className={styles.arrow}>→</div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
