'use client';

import Link from 'next/link';
import styles from './WhyChooseUsSection.module.css';
import { motion } from 'framer-motion';

export default function WhyChooseUsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.sectionLabel}>Why choose us</p>
          <h2 className={styles.title}>We strive to deliver value to our clients</h2>
          <p className={styles.subtitle}>
            We are dedicated to providing the highest level of service, delivering innovative solutions, and exceeding expectations in everything we do.
          </p>
        </motion.div>

        <div className={styles.features}>
          <motion.div
            className={styles.feature}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className={styles.featureHeader}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="6" width="16" height="12" stroke="white" strokeWidth="2" rx="2"/>
                  <path d="M4 10h16" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Deep legal expertise</h3>
            </div>
            <p className={styles.featureDescription}>
              We combine specialized knowledge with a record of achieving favorable outcomes in complex legal matters.
            </p>
            <Link href="/about" className={styles.featureLink}>
              Our track record →
            </Link>
          </motion.div>

          <motion.div
            className={styles.feature}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.featureHeader}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8h10M7 12h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="4" y="4" width="16" height="16" stroke="white" strokeWidth="2" rx="2"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Client-Focused Results</h3>
            </div>
            <p className={styles.featureDescription}>
              Our history is defined by successful case resolutions and dedicated advocacy for our clients' best interests.
            </p>
            <Link href="/services" className={styles.featureLink}>
              Our process →
            </Link>
          </motion.div>

          <motion.div
            className={styles.feature}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.featureHeader}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="4" width="12" height="16" stroke="white" strokeWidth="2" rx="2"/>
                  <path d="M10 4V2M14 4V2M6 8h12" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className={styles.featureTitle}>Strategic Counsel</h3>
            </div>
            <p className={styles.featureDescription}>
              We provide informed, strategic guidance, ensuring every decision is made with your ultimate legal goal in mind.
            </p>
            <Link href="/services" className={styles.featureLink}>
              Our solutions →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
