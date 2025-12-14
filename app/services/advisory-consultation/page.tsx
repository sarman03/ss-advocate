'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AdvisoryConsultation() {
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
            Advisory & Consultation Services
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            for-legal-guidance-case-evaluation-property-risk-checks-document-clarification
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
                  <li>Private Legal Risk Checks</li>
                  <li>Advice on Following Government Rules (Compliance)</li>
                  <li>Guidance on Business Structure and Legal Setup</li>
                  <li>Review of Official Legal Notices</li>
                  <li>Expert Legal Opinions and Reports</li>
                </ul>
              </div>

              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Why Choose Us</h3>
                <ul className={styles.servicesList}>
                  <li><strong>Proactive</strong> Advice to Prevent Problems</li>
                  <li><strong>Private</strong> and Highly Confidential Meetings</li>
                  <li><strong>30 Years</strong> of Experience Behind Every Tip</li>
                  <li><strong>Simple, Clear</strong> Answers to Complex Questions</li>
                  <li><strong>Immediate</strong> and Practical Guidance</li>
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
                Advisory & Consultation Services
              </motion.h2>
              <div className={styles.contentText}>
                <motion.p
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Legal decisions should be made with clarity — and our consultation services are designed to give you exactly that. We review your documents, explain their meaning, identify potential risks, and guide you on the next steps. Whether you are buying property, signing an agreement, or need clarity on a legal situation, we break down the information into simple, easy-to-understand language.
                </motion.p>
                <motion.p
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Our consultations help you understand your rights, obligations, and the safest way to proceed. We also provide guidance on builder-buyer documents, property verification, legal notices, and general legal concerns. You get honest, practical advice that helps you make informed decisions with confidence.
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
