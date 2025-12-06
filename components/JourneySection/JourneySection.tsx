import Link from 'next/link';
import styles from './JourneySection.module.css';

export default function JourneySection() {
  return (
    <section className={styles.journeySection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2 className={styles.title}>Our journey began 30 years ago</h2>
        <Link href="/about" className={styles.storyButton}>
          Read our story
        </Link>
      </div>
    </section>
  );
}
