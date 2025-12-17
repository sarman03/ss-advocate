'use client';

import { useState, useEffect } from 'react';
import styles from './DisclaimerModal.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function DisclaimerModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');

    if (!hasAccepted) {
      // Show modal after a brief delay for better UX
      setTimeout(() => {
        setIsVisible(true);
      }, 500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className={styles.title}>Disclaimer</h2>
            <div className={styles.content}>
              <p>
                As per professional ethics, <strong>S.S. Advocates Law Firm</strong> does not solicit or advertise legal services.
              </p>
              <p>
                The information on this website is for general purposes only and does not create an attorney–client relationship.
              </p>
              <p>
                By clicking "Accept", you confirm your understanding.
              </p>
            </div>
            <button className={styles.acceptButton} onClick={handleAccept}>
              Accept
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
