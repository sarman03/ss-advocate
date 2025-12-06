import Navbar from '@/components/Navbar/Navbar';
import styles from './page.module.css';

export default function Services() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Services</h1>
        </div>
        <div className={styles.content}>
          {/* Add your services content here */}
        </div>
      </main>
    </>
  );
}
