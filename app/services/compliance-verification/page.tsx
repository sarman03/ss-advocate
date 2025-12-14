'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ComplianceVerification() {
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
            Compliance & Verification Services
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            for-builder-buyer-agreement-review-document-verification-due-diligence
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
                  <li>Checking Builder-Buyer Agreements for Fairness</li>
                  <li>RERA (Real Estate Authority) Rule Compliance</li>
                  <li>Verifying Full Property Ownership History</li>
                  <li>Checking All Government Approvals (Plans, Licenses)</li>
                  <li>Legal Checks for Mergers and Big Purchases</li>
                </ul>
              </div>

              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Why Choose Us</h3>
                <ul className={styles.servicesList}>
                  <li><strong>Specialized</strong> Knowledge in Builder-Buyer Laws</li>
                  <li><strong>We Spot</strong> Hidden Risks and Bad Clauses</li>
                  <li><strong>Complete</strong> Protection from Future Legal Issues</li>
                  <li><strong>Thorough</strong> Checking of Every Document</li>
                  <li><strong>Fast</strong> and Dependable Verification Reports</li>
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
                Compliance & Verification Services
              </motion.h2>
              <div className={styles.contentText}>
                <motion.p
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Before signing or proceeding with any legal document, it is important to confirm that everything is accurate, valid, and safe. We provide thorough verification of property documents, builder-buyer agreements, supporting papers, and legal documents to ensure they meet the required standards.
                </motion.p>
                <motion.p
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Our verification includes checking title documents, chain of ownership, encumbrance-related details, correctness of names and numbers, and ensuring the document content is legally acceptable. We help identify missing documents, inconsistencies, or terms that may cause problems later. This gives you complete clarity before you finalize any important decision.
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
