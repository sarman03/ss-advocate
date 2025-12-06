import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Both Sushil and Sunil are very knowledgeable courteous and helpful. Very proficient in their work. make it thoda sa long",
    name: "Janendra Sharma",
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
    rating: 5,
    text: "Advocate Sushil K. Singh made our company's lease deed registration at the Noida Sub Registrar Office smooth. Thanks to his expert knowledge. Highly recommended.",
    name: "Harsh Singh",
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    rating: 5,
    text: "I got my property work done. My experience has been very good and both the advocates are very good. Every work gets done on time. Special thanks to Advocate SK Singh ji.",
    name: "Urvashi",
    image: "/testimonial-3.jpg"
  },
  {
    id: 4,
    rating: 5,
    text: "Professional and dedicated legal team. They handled my case with utmost care and expertise. Highly satisfied with the outcome.",
    name: "Rajesh Kumar",
    image: "/testimonial-1.jpg"
  },
  {
    id: 5,
    rating: 5,
    text: "Excellent service and timely resolution of my legal matter. The team is very responsive and knowledgeable.",
    name: "Priya Sharma",
    image: "/testimonial-2.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.sectionLabel}>Testimonials</p>
          <h2 className={styles.title}>Decades of Trust. Proven Results.</h2>
        </div>
        <p className={styles.description}>
          Whether your case involves a complex corporate matter, personal litigation, or constitutional challenge, our dedication to justice remains absolute. Read what our clients say about our advocacy.
        </p>
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
