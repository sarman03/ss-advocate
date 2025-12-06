import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get expert legal help.</h2>
        <Link href="/contact" className={styles.ctaButton}>
          Get started
        </Link>
      </div>
    </section>
  );
}
