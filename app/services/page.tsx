'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import { motion } from 'framer-motion';

export default function Services() {
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
            Services
          </motion.h1>
        </div>
        <div className={styles.content}>
          <div className={styles.servicesSection}>
            <motion.p
              className={styles.sectionLabel}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Our services
            </motion.p>

            <div className={styles.headerWrapper}>
              <motion.h2
                className={styles.sectionTitle}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                We offer a wide range of services
              </motion.h2>
              <motion.p
                className={styles.sectionSubtitle}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.animate}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                With deep legal knowledge and a commitment to precision, we craft strategies that protect your interests and ensure dependable outcomes.
              </motion.p>
            </div>

            <motion.div
              className={styles.servicesGrid}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <img src="/services/boxes/box1.jpeg" alt="Property & Registration Services" className={styles.serviceImage} />
                </div>
                <div className={styles.serviceOverlay}>
                  <div className={styles.serviceTitleWrapper}>
                    <h3 className={styles.serviceTitle}>Property & Registration Services</h3>
                    <button className={styles.serviceButton}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <p className={styles.serviceDescription}>for-registry-sale-deed-gift-deed-poa-title-verification-mutation</p>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <img src="/services/boxes/box2.jpeg" alt="Family & Personal Legal Support" className={styles.serviceImage} />
                </div>
                <div className={styles.serviceOverlay}>
                  <div className={styles.serviceTitleWrapper}>
                    <h3 className={styles.serviceTitle}>Family & Personal Legal Support</h3>
                    <button className={styles.serviceButton}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <p className={styles.serviceDescription}>for-court-marriage-marriage-registration-family-settlements-adoption-deeds</p>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <img src="/services/boxes/box3.jpg" alt="Legal Drafting & Documentation" className={styles.serviceImage} />
                </div>
                <div className={styles.serviceOverlay}>
                  <div className={styles.serviceTitleWrapper}>
                    <h3 className={styles.serviceTitle}>Legal Drafting & Documentation</h3>
                    <button className={styles.serviceButton}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <p className={styles.serviceDescription}>for-agreements-affidavits-authority-letters-wills-partnership-deeds</p>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <img src="/services/boxes/box4.jpeg" alt="Dispute Resolution & Litigation" className={styles.serviceImage} />
                </div>
                <div className={styles.serviceOverlay}>
                  <div className={styles.serviceTitleWrapper}>
                    <h3 className={styles.serviceTitle}>Dispute Resolution & Litigation</h3>
                    <button className={styles.serviceButton}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <p className={styles.serviceDescription}>for-civil-disputes-property-litigation-cheque-bounce-fir-complaint-guidance</p>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <img src="/services/boxes/box5.jpg" alt="Advisory & Consultation Services" className={styles.serviceImage} />
                </div>
                <div className={styles.serviceOverlay}>
                  <div className={styles.serviceTitleWrapper}>
                    <h3 className={styles.serviceTitle}>Advisory & Consultation Services</h3>
                    <button className={styles.serviceButton}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <p className={styles.serviceDescription}>for-legal-guidance-case-evaluation-property-risk-checks-document-clarification</p>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={styles.serviceImageWrapper}>
                  <img src="/services/boxes/box6.jpg" alt="Compliance & Verification Services" className={styles.serviceImage} />
                </div>
                <div className={styles.serviceOverlay}>
                  <div className={styles.serviceTitleWrapper}>
                    <h3 className={styles.serviceTitle}>Compliance & Verification Services</h3>
                    <button className={styles.serviceButton}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  <p className={styles.serviceDescription}>for-builder-buyer-agreement-review-document-verification-due-diligence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
