import Navbar from '@/components/Navbar/Navbar';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import CTASection from '@/components/CTASection/CTASection';
import ApproachSection from '@/components/ApproachSection/ApproachSection';
import JourneySection from '@/components/JourneySection/JourneySection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection/WhyChooseUsSection';
import ProcessSection from '@/components/ProcessSection/ProcessSection';
import AdvocacySection from '@/components/AdvocacySection/AdvocacySection';
import TestimonialsSection from '@/components/TestimonialsSection/TestimonialsSection';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Your Legal Partner
              <br />
              in every step.
            </h1>
            <p className={styles.heroSubtitle}>
              We stand with you - resolving challenges, uncovering opportunities, and securing your success.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>
                Book an Appointment
              </button>
              <button className={styles.secondaryButton}>
                Contact page
              </button>
            </div>
          </div>
        </div>
        <ServicesSection />
        <CTASection />
        <ApproachSection />
        <JourneySection />
        <WhyChooseUsSection />
        <ProcessSection />
        <AdvocacySection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
