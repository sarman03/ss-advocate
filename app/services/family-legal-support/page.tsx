'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FamilyLegalSupport() {
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
            Family & Personal Legal Support
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            for court marriage, marriage registration, family settlements, adoption deeds
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
                  <li>Divorce and Separation Filings</li>
                  <li>Child Custody and Visitation Rights</li>
                  <li>Financial Support (Maintenance and Alimony)</li>
                  <li>Protection from Domestic Violence</li>
                  <li>Drafting of Wills and Settling Inheritance</li>
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
                Family & Personal Legal Support (Very Detailed)
              </motion.h2>
              <div className={styles.contentText}>
                <motion.p
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Personal legal procedures often require specific documents, correct affidavits, and step-by-step compliance. We assist with court marriages, marriage registrations, adoption deeds, and family settlements. Our support includes preparing all required affidavits, declarations, identity documentation, witness details, and guiding you through the exact process followed by the authorities.
                </motion.p>
                <motion.p
                  initial={fadeInUp.initial}
                  whileInView={fadeInUp.animate}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We make the entire process easier by explaining what documents you need, what steps will be taken, and how long each stage typically takes. Whether it's registering a marriage, preparing a settlement within family members, or completing documentation for adoption, we make the experience smooth, transparent, and free of hurdles.
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
