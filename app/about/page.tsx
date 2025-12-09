import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
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

        <section className={styles.journeySection}>
          <div className={styles.journeyContainer}>
            <div className={styles.journeyContent}>
              <p className={styles.sectionLabel}>Our journey</p>
              <h2 className={styles.journeyTitle}>Three Decades of Dedicated Advocacy</h2>
              <p className={styles.journeyText}>
                Since 1995, S.S Advocates has been dedicated to upholding the rule of law and providing uncompromising legal representation. What began as a commitment to fairness has evolved into a practice defined by specialized expertise, trust, and a passion for securing clients' rights across diverse jurisdictions.
              </p>
            </div>
            <div className={styles.journeyImage}>
              <img src="/about/img2.jpg" alt="Legal consultation" className={styles.journeyImg} />
            </div>
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className={styles.principlesContainer}>
            <div className={styles.principlesImage}>
              <img src="/about/img3.jpg" alt="Legal principles" className={styles.principlesImg} />
            </div>
            <div className={styles.principlesContent}>
              <div className={styles.principleBlock}>
                <h3 className={styles.principleTitle}>Our Core Legal Principles</h3>
                <p className={styles.principleText}>
                  At the core of our practice are the non-negotiable principles of <strong>Integrity, Confidentiality, and Ethical Diligence</strong>. These values dictate our conduct in the courtroom and ensure that every client receives the transparent, trustworthy counsel they deserve.
                </p>
              </div>
              <div className={styles.principleBlock}>
                <h3 className={styles.principleTitle}>A Strategic Approach to Every Case</h3>
                <p className={styles.principleText}>
                  We believe that successful legal outcomes start with meticulous preparation. We commit to comprehensively understanding the facts of your case, developing a robust and forward-thinking legal strategy, and providing decisive, clear communication at every stage of the process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.statsRibbon}>
          <div className={styles.statsContainer}>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>30</h3>
              <p className={styles.statLabel}>Years of experience</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>1000+</h3>
              <p className={styles.statLabel}>Matters handled</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>100%</h3>
              <p className={styles.statLabel}>Commitment to Ethics</p>
            </div>
            <div className={styles.statItem}>
              <h3 className={styles.statNumber}>2</h3>
              <p className={styles.statLabel}>Principal Advocates</p>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className={styles.teamContainer}>
            <p className={styles.teamLabel}>Our legal team</p>
            <h2 className={styles.teamTitle}>Meet Our Principal Advocates</h2>
            <p className={styles.teamSubtitle}>
              Our practice is built on the combined experience of two dedicated legal professionals, ensuring <strong>personal attention</strong> and <strong>specialized expertise</strong> for every client.
            </p>

            <div className={styles.advocatesGrid}>
              <div className={styles.advocateCard}>
                <div className={styles.advocateImage}>
                  <img src="/about/team/sushil.jpeg" alt="Sushil K Singh" className={styles.advocateImg} />
                </div>
                <h3 className={styles.advocateName}>Sushil K Singh</h3>
                <p className={styles.advocateTitle}>Advocate</p>
              </div>

              <div className={styles.advocateCard}>
                <div className={styles.advocateImage}>
                  <img src="/about/team/sunil.jpeg" alt="Sunil Dutt Singh" className={styles.advocateImg} />
                </div>
                <h3 className={styles.advocateName}>Sunil Dutt Singh</h3>
                <p className={styles.advocateTitle}>Advocate</p>
              </div>

              <div className={styles.advocateCard}>
                <div className={styles.advocateImage}>
                  {/* Image placeholder */}
                </div>
                <h3 className={styles.advocateName}>Sunil Kumar</h3>
                <p className={styles.advocateTitle}>Plaintiff</p>
              </div>

              <div className={styles.advocateCard}>
                <div className={styles.advocateImage}>
                  {/* Image placeholder */}
                </div>
                <h3 className={styles.advocateName}>Amber Lal</h3>
                <p className={styles.advocateTitle}>Plaintiff</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
