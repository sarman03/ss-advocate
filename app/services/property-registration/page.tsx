'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PropertyRegistration() {
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
            Property & Registration Services
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            for-registry-sale-deed-gift-deed-poa-title-verification-mutation
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
                  <li>Checking Property Titles (Making sure the seller is the legal owner)</li>
                  <li>Drafting and Registering Sale/Gift Documents</li>
                  <li>Advice on Registration Fees and Stamp Duty</li>
                  <li>Handling Power of Attorney Documents</li>
                  <li>Working with the Government Sub-Registrar Offices</li>
                </ul>
              </div>

              <div className={styles.sidebarSection}>
                <h3 className={styles.sidebarTitle}>Why Choose Us</h3>
                <ul className={styles.servicesList}>
                  <li>We do <strong>Thorough Checks</strong> to prevent future problems.</li>
                  <li><strong>Simple, Clear</strong> process guidance.</li>
                  <li><strong>Honest</strong> and Transparent Fees.</li>
                  <li><strong>Guaranteed</strong> Error-Free Registration.</li>
                  <li><strong>30 Years</strong> of Experience in Property Law</li>
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
                Property & Registration Services
              </motion.h2>
              <div className={styles.contentText}>
                <motion.p
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Property registration involves multiple steps, documents, and legal requirements — and we assist you throughout the entire process. Our service includes preparing and reviewing all required documents such as sale deeds, gift deeds, relinquishment deeds, and Power of Attorney (GPA/SPA). We guide you on stamp duty, registration charges, ID proofs, and supporting documents needed as per Sub-Registrar Office rules.
                </motion.p>
                <motion.p
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We help you schedule appointments, complete biometric verification, and ensure all details in the documents match government records. For transfers within family, buying or selling a property, or registering any type of deed, we make sure the process remains smooth, accurate, and legally compliant. Our goal is to save your time, prevent errors, and ensure your registry is completed without stress or confusion.
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
