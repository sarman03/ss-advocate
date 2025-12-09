import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
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
        </div>
      </div>
    </nav>
  );
}
