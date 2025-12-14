'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import { motion } from 'framer-motion';

export default function Contact() {
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
            Contact
          </motion.h1>
        </div>
        <div className={styles.content}>
          <div className={styles.formSection}>
            <motion.p
              className={styles.formLabel}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Contact us
            </motion.p>
            <motion.h2
              className={styles.formTitle}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              How to reach us
            </motion.h2>
            <motion.p
              className={styles.formSubtitle}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Whether you have a specific legal matter or simply need to understand your rights, <strong>all consultations are strictly confidential</strong>.
            </motion.p>

            <motion.form
              className={styles.contactForm}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className={styles.formRow}>
                <input
                  type="text"
                  placeholder="Your name"
                  className={styles.formInput}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className={styles.formInput}
                />
              </div>
              <textarea
                placeholder="How can we help?"
                className={styles.formTextarea}
                rows={6}
              />
              <button type="submit" className={styles.submitButton}>
                Send message
              </button>
            </motion.form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
