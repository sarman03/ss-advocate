'use client';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import { motion } from 'framer-motion';

export default function About() {
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
            About Us
          </motion.h1>
          <motion.button
            className={styles.reviewButton}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Leave a Review
          </motion.button>
        </div>

        <section className={styles.journeySection}>
          <div className={styles.journeyContainer}>
            <motion.div
              className={styles.journeyContent}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <p className={styles.sectionLabel}>Our journey</p>
              <h2 className={styles.journeyTitle}>Three Decades of Dedicated Advocacy</h2>
              <p className={styles.journeyText}>
                Since 1995, S.S Advocates has been dedicated to upholding the rule of law and providing uncompromising legal representation. What began as a commitment to fairness has evolved into a practice defined by specialized expertise, trust, and a passion for securing clients' rights across diverse jurisdictions.
              </p>
            </motion.div>
            <motion.div
              className={styles.journeyImage}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src="/about/img2.jpg" alt="Legal consultation" className={styles.journeyImg} />
            </motion.div>
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className={styles.principlesContainer}>
            <motion.div
              className={styles.principlesImage}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img src="/about/img3.jpg" alt="Legal principles" className={styles.principlesImg} />
            </motion.div>
            <motion.div
              className={styles.principlesContent}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className={styles.principleBlock}>
                <h3 className={styles.principleTitle}>Our Core Legal Principles</h3>
                <p className={styles.principleText}>
                  At the core of our practice are the non-negotiable principles of <strong>Integrity, Confidentiality, and Ethical Diligence</strong>. These values dictate our conduct in the courtroom and ensure that every client receives the transparent, trustworthy counsel they deserve.
                </p>
              </div>
              <div className={styles.principleBlock}>
                <h3 className={styles.principleTitle}>A Strategic Approach to Every Case</h3>
                <p className={styles.principleText}>
                  We believe that successful legal outcomes start with meticulous preparation. We commit to comprehensively understanding the facts of your case, developing a robust and forward-thinking legal strategy, and providing decisive, clear communication at every stage of the process.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className={styles.statsRibbon}>
          <motion.div
            className={styles.statsContainer}
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>30</h3>
              <p className={styles.statLabel}>Years of experience</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>1000+</h3>
              <p className={styles.statLabel}>Matters handled</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>100%</h3>
              <p className={styles.statLabel}>Commitment to Ethics</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>2</h3>
              <p className={styles.statLabel}>Principal Advocates</p>
            </div>
          </motion.div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.teamContainer}>
            <motion.p
              className={styles.teamLabel}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              Our legal team
            </motion.p>
            <motion.h2
              className={styles.teamTitle}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Meet Our Principal Advocates
            </motion.h2>
            <motion.p
              className={styles.teamSubtitle}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our practice is built on the combined experience of two dedicated legal professionals, ensuring <strong>personal attention</strong> and <strong>specialized expertise</strong> for every client.
            </motion.p>

            <motion.div
              className={styles.advocatesGrid}
              initial={fadeInUp.initial}
              whileInView={fadeInUp.animate}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className={styles.advocateCard}>
                <div className={styles.advocateImage}>
                  <img src="/about/team/sushil.jpeg" alt="Sushil K Singh" className={styles.advocateImg} />
                </div>
                <h3 className={styles.advocateName}>Sushil K Singh</h3>
                <p className={styles.advocateTitle}>Advocate</p>
              </div>

              <div className={styles.advocateCard}>
                <div className={styles.advocateImage}>
                  <img src="/about/team/sunil.jpeg" alt="Sunil Dutt Singh" className={styles.advocateImg} />
                </div>
                <h3 className={styles.advocateName}>Sunil Dutt Singh</h3>
                <p className={styles.advocateTitle}>Advocate</p>
              </div>

              <div className={styles.advocateCard}>
                <div className={styles.advocateImage}>
                  <img src="/about/team/sunil_kumar.jpeg" alt="Sunil Kumar" className={styles.advocateImg} />
                </div>
                <h3 className={styles.advocateName}>Sunil Kumar</h3>
                <p className={styles.advocateTitle}>Munshi</p>
              </div>

              <div className={styles.advocateCard}>
                <div className={styles.advocateImage}>
                  <img src="/about/team/amberlal.jpeg" alt="Amber Lal" className={styles.advocateImg} />
                </div>
                <h3 className={styles.advocateName}>Amber Lal</h3>
                <p className={styles.advocateTitle}>Munshi</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
