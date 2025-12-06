import Navbar from '@/components/Navbar/Navbar';
import styles from './page.module.css';

export default function About() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>About Us</h1>
          <button className={styles.reviewButton}>
            Leave a Review
          </button>
        </div>
      </main>
    </>
  );
}
