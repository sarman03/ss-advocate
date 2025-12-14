'use client';

import Link from 'next/link';
import styles from './AdvocacySection.module.css';
import { motion } from 'framer-motion';

export default function AdvocacySection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.advocacySection}>
      <div className={styles.container}>
        <motion.div
          className={styles.leftContent}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageWrapper}>
            <img src="/home/Indian constitution.jpeg" alt="Constitution of India" className={styles.constitutionImage} />
            <div className={styles.statsCards}>
              <div className={styles.statCard} style={{ backgroundColor: '#000' }}>
                <div className={styles.statNumber}>30+</div>
                <div className={styles.statLabel}>Years of experience</div>
              </div>
              <div className={styles.statCard} style={{ backgroundColor: '#fff', color: '#000' }}>
                <div className={styles.statNumber}>95%</div>
                <div className={styles.statLabel}>Favorable outcomes</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.rightContent}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className={styles.sectionLabel}>Your Advocate. Your Victory.</p>
          <h2 className={styles.title}>Relentless Advocacy for Your Rights</h2>
          <p className={styles.description}>
            With our <strong>30 years of experience</strong>, <strong>client-focused communication</strong>, and <strong>unwavering commitment to justice</strong>, we are uniquely positioned to provide the strategic counsel you need to <strong>resolve complex legal challenges</strong> and <strong>secure a favorable outcome</strong>.
          </p>
          <Link href="/contact" className={styles.consultationButton}>
            Schedule Your Confidential Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
