import Link from 'next/link';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>Our process</h2>
          <p className={styles.description}>
            We developed an innovative and flexible process that allows us to understand your business better
          </p>
          <Link href="/services" className={styles.learnButton}>
            Learn more
          </Link>
        </div>

        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <h3 className={styles.cardTitle}>Initial Assessment</h3>
            <p className={styles.cardDescription}>
              We begin by listening closely to your situation to understand the legal scope and potential strategies.
            </p>
          </div>

          <div className={styles.processCard}>
            <h3 className={styles.cardTitle}>Strategy & Preparation</h3>
            <p className={styles.cardDescription}>
              We develop a robust legal strategy, gather all necessary evidence, prepare filings, and lay the foundation for successful advocacy.
            </p>
          </div>

          <div className={styles.processCard}>
            <h3 className={styles.cardTitle}>Resolution & Follow-Up</h3>
            <p className={styles.cardDescription}>
              We finalize the legal matter, ensure compliance with all judgments or settlements, and provide essential post-case guidance.
            </p>
          </div>

          <div className={styles.processCard}>
            <h3 className={styles.cardTitle}>Advocacy & Negotiation</h3>
            <p className={styles.cardDescription}>
              This is the action phase: representing you in court, engaging in mediation, or negotiating resolutely to protect your rights and interests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
