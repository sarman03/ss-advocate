import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
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
          <div className={styles.formSection}>
            <p className={styles.formLabel}>Contact us</p>
            <h2 className={styles.formTitle}>How to reach us</h2>
            <p className={styles.formSubtitle}>
              Whether you have a specific legal matter or simply need to understand your rights, <strong>all consultations are strictly confidential</strong>.
            </p>

            <form className={styles.contactForm}>
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
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
