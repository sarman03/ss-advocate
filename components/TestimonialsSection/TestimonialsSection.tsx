'use client';

import styles from './TestimonialsSection.module.css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Both Sushil and Sunil are very knowledgeable courteous and helpful. Very proficient in their work. make it thoda sa long",
    name: "Janendra Sharma",
    image: "/testimonials/janendra.jpeg"
  },
  {
    id: 2,
    rating: 5,
    text: "Advocate Sushil K. Singh made our company's lease deed registration at the Noida Sub Registrar Office smooth. Thanks to his expert knowledge. Highly recommended.",
    name: "Harsh Singh",
    image: "/testimonials/harsh.jpeg"
  },
  {
    id: 3,
    rating: 5,
    text: "I got my property work done. My experience has been very good and both the advocates are very good. Every work gets done on time. Special thanks to Advocate SK Singh ji.",
    name: "Urvashi",
    image: "/testimonials/urvashi.jpeg"
  },
  {
    id: 4,
    rating: 5,
    text: "Highly professional and trustworthy property consultants. They handled everything from legal checks to final registration smoothly. Clear advice, honest guidance, and excellent service. Highly recommended!",
    name: "Himank Singh",
    image: "/testimonials/himank.jpeg"
  }
];

export default function TestimonialsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <motion.div
          className={styles.headerContent}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.sectionLabel}>Testimonials</p>
          <h2 className={styles.title}>Decades of Trust. Proven Results.</h2>
        </motion.div>
        <motion.p
          className={styles.description}
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Whether your case involves a complex corporate matter, personal litigation, or constitutional challenge, our dedication to justice remains absolute. Read what our clients say about our advocacy.
        </motion.p>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`${testimonial.id}-${index}`} className={styles.testimonialCard}>
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className={styles.star}>★</span>
                ))}
              </div>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.author}>
                <img src={testimonial.image} alt={testimonial.name} className={styles.authorImage} />
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{testimonial.name}</p>
                  <p className={styles.authorTitle}>{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
