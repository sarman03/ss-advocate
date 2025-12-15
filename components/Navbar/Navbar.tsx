'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logos/Asset 3@2x.png"
              alt="S.S. Advocates Law Firm"
              width={200}
              height={50}
              className={styles.logoImage}
              priority
            />
          </Link>

          <div className={styles.navRight}>
            <div className={styles.navLinks}>
              <Link href="/" className={styles.navLink}>Home</Link>
              <Link href="/about" className={styles.navLink}>About</Link>
              <Link href="/services" className={styles.navLink}>Services</Link>
            </div>

            <Link href="/contact" className={styles.contactButton}>
              Contact
            </Link>

            <button
              className={styles.hamburger}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.mobileLogo} onClick={closeMobileMenu}>
            <Image
              src="/logos/Asset 3@2x.png"
              alt="S.S. Advocates Law Firm"
              width={200}
              height={50}
              className={styles.logoImage}
            />
          </Link>
          <button
            className={styles.closeButton}
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className={styles.mobileMenuContent}>
          <Link href="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/services" className={styles.mobileNavLink} onClick={closeMobileMenu}>
            Services
          </Link>
          <Link href="/contact" className={styles.mobileContactButton} onClick={closeMobileMenu}>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
