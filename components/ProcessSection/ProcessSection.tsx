'use client';

import Link from 'next/link';
import styles from './ProcessSection.module.css';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.leftContent}
          initial={fadeIn.initial}
          whileInView={fadeIn.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Our process</h2>
          <p className={styles.description}>
            We developed an innovative and flexible process that allows us to understand your business better
          </p>
          <Link href="/about" className={styles.learnButton}>
            Learn more
          </Link>
        </motion.div>

        <div className={styles.processGrid}>
          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div
              className={styles.processCard}
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className={styles.cardTitle}>Initial Assessment</h3>
              <p className={styles.cardDescription}>
                We begin by listening closely to your situation to understand the legal scope and potential strategies.
              </p>
            </motion.div>
          </Link>

          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div
              className={styles.processCard}
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className={styles.cardTitle}>Strategy & Preparation</h3>
              <p className={styles.cardDescription}>
                We develop a robust legal strategy, gather all necessary evidence, prepare filings, and lay the foundation for successful advocacy.
              </p>
            </motion.div>
          </Link>

          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div
              className={styles.processCard}
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className={styles.cardTitle}>Resolution & Follow-Up</h3>
              <p className={styles.cardDescription}>
                We finalize the legal matter, ensure compliance with all judgments or settlements, and provide essential post-case guidance.
              </p>
            </motion.div>
          </Link>

          <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <motion.div
              className={styles.processCard}
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className={styles.cardTitle}>Advocacy & Negotiation</h3>
              <p className={styles.cardDescription}>
                This is the action phase: representing you in court, engaging in mediation, or negotiating resolutely to protect your rights and interests.
              </p>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
