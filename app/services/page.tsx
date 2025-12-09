import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
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
          <div className={styles.servicesSection}>
            <p className={styles.sectionLabel}>Our services</p>
            <h2 className={styles.sectionTitle}>We offer a wide range of services</h2>
            <p className={styles.sectionSubtitle}>
              With deep legal knowledge and a commitment to precision, we craft strategies that protect your interests and ensure dependable outcomes.
            </p>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <img src="/services/boxes/box1.jpeg" alt="Property & Registration Services" className={styles.serviceImage} />
                <div className={styles.serviceOverlay}>
                  <h3 className={styles.serviceTitle}>Property & Registration Services</h3>
                  <button className={styles.serviceButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <img src="/services/boxes/box2.jpeg" alt="Family & Personal Legal Support" className={styles.serviceImage} />
                <div className={styles.serviceOverlay}>
                  <h3 className={styles.serviceTitle}>Family & Personal Legal Support</h3>
                  <button className={styles.serviceButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <img src="/services/boxes/box3.jpg" alt="Legal Drafting & Documentation" className={styles.serviceImage} />
                <div className={styles.serviceOverlay}>
                  <h3 className={styles.serviceTitle}>Legal Drafting & Documentation</h3>
                  <button className={styles.serviceButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <img src="/services/boxes/box4.jpeg" alt="Dispute Resolution & Litigation" className={styles.serviceImage} />
                <div className={styles.serviceOverlay}>
                  <h3 className={styles.serviceTitle}>Dispute Resolution & Litigation</h3>
                  <button className={styles.serviceButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <img src="/services/boxes/box5.jpg" alt="Advisory & Consultation Services" className={styles.serviceImage} />
                <div className={styles.serviceOverlay}>
                  <h3 className={styles.serviceTitle}>Advisory & Consultation Services</h3>
                  <button className={styles.serviceButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <img src="/services/boxes/box6.jpg" alt="Compliance & Verification Services" className={styles.serviceImage} />
                <div className={styles.serviceOverlay}>
                  <h3 className={styles.serviceTitle}>Compliance & Verification Services</h3>
                  <button className={styles.serviceButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
