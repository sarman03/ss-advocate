import Navbar from '@/components/Navbar/Navbar';
import styles from './page.module.css';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Contact</h1>
        </div>
        <div className={styles.content}>
          {/* Add your contact form or information here */}
        </div>
      </main>
    </>
  );
}
