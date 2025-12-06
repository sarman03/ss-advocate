import styles from './ApproachSection.module.css';

export default function ApproachSection() {
  return (
    <section className={styles.approachSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.imageWrapper}>
            <img src="/lawyer-image.jpg" alt="Professional lawyer" className={styles.lawyerImage} />
            <div className={styles.statsCard}>
              <div className={styles.statsHeader}>
                <span className={styles.statsIcon}>📈</span>
                <span className={styles.statsLabel}>Case Resolution Rate</span>
                <span className={styles.statsValue}>+30%</span>
              </div>
              <div className={styles.chart}>
                <div className={styles.bar} style={{ height: '40%' }}></div>
                <div className={styles.bar} style={{ height: '55%' }}></div>
                <div className={styles.bar} style={{ height: '50%' }}></div>
                <div className={styles.bar} style={{ height: '60%' }}></div>
                <div className={styles.bar} style={{ height: '65%' }}></div>
                <div className={styles.bar} style={{ height: '80%' }}></div>
                <div className={styles.bar} style={{ height: '85%' }}></div>
                <div className={styles.bar} style={{ height: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <p className={styles.sectionLabel}>Our approach</p>
          <h2 className={styles.title}>Strategic & Experienced Legal Guidance</h2>
          <p className={styles.philosophy}>
            Our philosophy is founded on <strong>Diligence, Clarity, and Ethics</strong>. We blend decades of legal experience with meticulous preparation to offer guidance that secures favorable outcomes.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.checkmark}>✓</div>
              <p className={styles.featureText}>We prioritize the Advocate-Client Relationship</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.checkmark}>✓</div>
              <p className={styles.featureText}>We craft Custom Legal Strategies for your unique case</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
