'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LegalDrafting() {
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
            Legal Drafting & Documentation
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            for-agreements-affidavits-authority-letters-wills-partnership-deeds
          </motion.p>
        </div>

        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            <motion.aside
              className={styles.sidebar}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Key Services</h3>
                <ul className={styles.servicesList}>
                  <li>Writing Simple, Clear Business Contracts</li>
                  <li>Drafting Affidavits and Sworn Statements</li>
                  <li>Creating Partnership and Joint Venture Agreements</li>
                  <li>Protecting Business Secrets (NDAs)</li>
                  <li>Reviewing Your Existing Legal Papers</li>
                </ul>
              </div>

              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Why Choose Us</h3>
                <ul className={styles.servicesList}>
                  <li><strong>Accurate</strong> Drafting to Avoid Mistakes</li>
                  <li><strong>Documents</strong> that Clearly Protect Your Interests</li>
                  <li><strong>Custom-Made</strong> for Your Specific Needs</li>
                  <li><strong>Fast</strong> and Reliable Completion</li>
                  <li><strong>Reduces</strong> the Risk of Future Legal Problems</li>
                </ul>
              </div>
            </motion.aside>

            <div className={styles.mainContent}>
              <motion.h2
                className={styles.contentTitle}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                Legal Drafting & Documentation (Very Detailed)
              </motion.h2>
              <div className={styles.contentText}>
                <motion.p
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Every legal document must be drafted carefully to ensure clarity, enforceability, and future security — and that is exactly what we focus on. We prepare a wide range of documents including agreements, affidavits, wills, partnership deeds, declarations, authority letters, rent agreements, and more. Each draft is created only after understanding your requirements, the purpose of the document, and the legal aspects involved.
                </motion.p>
                <motion.p
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We ensure correct structure, proper clauses, accurate details, and legally accepted wording. Our drafting avoids ambiguity, unnecessary complications, or errors that can cause disputes later. Whether you need a simple affidavit or a detailed agreement, we prepare the document in a clean, professional, and legally appropriate format.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
