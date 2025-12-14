'use client';

import Link from 'next/link';
import styles from './CTASection.module.css';
import { motion } from 'framer-motion';

export default function CTASection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Get expert legal help.
        </motion.h2>
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link href="/contact" className={styles.ctaButton}>
            Get started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
