'use client';

import Link from 'next/link';
import styles from './ServicesSection.module.css';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div
            className={styles.headerLeft}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.sectionLabel}>Our services</p>
            <h2 className={styles.title}>We offer a wide<br />range of services</h2>
          </motion.div>
          <motion.div
            className={styles.headerRight}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className={styles.description}>
              With deep legal knowledge and a commitment to precision, we craft strategies that protect your interests and ensure dependable outcomes.
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.servicesGrid}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/services/property-registration" className={`${styles.serviceCard} ${styles.cardLarge}`}>
            <div className={styles.cardImage}>
              <img src="/home/services page/img1.jpeg" alt="Property & Registration Services" />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Property & Registration Services</h3>
                <p className={styles.cardDescription}>for registry, sale deed, gift deed, title verification</p>
              </div>
              <div className={styles.cardArrow}>→</div>
            </div>
          </Link>

          <Link href="/services/family-legal-support" className={styles.serviceCard}>
            <div className={styles.cardImage}>
              <img src="/home/services page/img2.jpeg" alt="Family & Personal Legal Support" />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Family & Personal Legal Support</h3>
                <p className={styles.cardDescription}>for court marriage, marriage registration, family settlements, adoption deeds</p>
              </div>
              <div className={styles.cardArrow}>→</div>
            </div>
          </Link>

          <Link href="/services/legal-drafting" className={styles.serviceCard}>
            <div className={styles.cardImage}>
              <img src="/home/services page/img3.jpg" alt="Legal Drafting & Documentation" />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>Legal Drafting & Documentation</h3>
                <p className={styles.cardDescription}>for agreements, affidavits, authority letters, wills, partnership deeds</p>
              </div>
              <div className={styles.cardArrow}>→</div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
