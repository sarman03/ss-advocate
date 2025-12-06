import Link from 'next/link';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.sectionLabel}>Our services</p>
            <h2 className={styles.title}>We offer a wide<br />range of services</h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.description}>
              With deep legal knowledge and a commitment to precision, we craft strategies that protect your interests and ensure dependable outcomes.
            </p>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          <Link href="/services" className={`${styles.serviceCard} ${styles.cardLarge}`}>
            <div className={styles.cardImage}>
              <img src="/property-services.jpg" alt="Property & Registration Services" />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Property & Registration Services</h3>
              <div className={styles.cardArrow}>→</div>
            </div>
          </Link>

          <Link href="/services" className={styles.serviceCard}>
            <div className={styles.cardImage}>
              <img src="/family-law.jpg" alt="Family & Personal Legal Support" />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Family & Personal Legal Support</h3>
              <div className={styles.cardArrow}>→</div>
            </div>
          </Link>

          <Link href="/services" className={styles.serviceCard}>
            <div className={styles.cardImage}>
              <img src="/legal-drafting.jpg" alt="Legal Drafting & Documentation" />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Legal Drafting & Documentation</h3>
              <div className={styles.cardArrow}>→</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
