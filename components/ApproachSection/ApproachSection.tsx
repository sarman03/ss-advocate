'use client';

import styles from './ApproachSection.module.css';
import { motion } from 'framer-motion';

export default function ApproachSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  const ChartIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.statsIcon}
    >
      <path
        d="M3 13h4v8H3v-8zm6-8h4v16H9V5zm6 4h4v12h-4V9z"
        fill="#9333EA"
      />
    </svg>
  );

  return (
    <section className={styles.approachSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.leftContent}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.imageWrapper}>
            <img src="/home/services page/new.jpg" alt="Professional lawyer" className={styles.lawyerImage} />
          </div>
        </motion.div>

        <motion.div
          className={styles.rightContent}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className={styles.sectionLabel}>Our approach</p>
          <h2 className={styles.title}>Strategic & Experienced Legal Guidance</h2>
          <p className={styles.philosophy}>
            Our philosophy is founded on <strong>Diligence, Clarity, and Ethics</strong>. We blend decades of legal experience with meticulous preparation to offer guidance that secures favorable outcomes.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.checkmark}>✓</div>
              <p className={styles.featureText}>We prioritize the Advocate-Client Relationship</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.checkmark}>✓</div>
              <p className={styles.featureText}>We craft Custom Legal Strategies for your unique case</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
