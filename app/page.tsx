'use client';

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
import { motion } from 'framer-motion';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <motion.h1
              className={styles.heroTitle}
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Legal Partner
              <br />
              in every step.
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We stand with you - resolving challenges, uncovering opportunities, and securing your success.
            </motion.p>
            <motion.div
              className={styles.heroButtons}
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className={styles.primaryButton}>
                Book an Appointment
              </button>
              <button className={styles.secondaryButton}>
                Contact page
              </button>
            </motion.div>
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
