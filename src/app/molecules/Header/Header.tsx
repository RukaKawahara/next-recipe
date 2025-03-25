import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.header_link}>Home</Link>
      <div className={styles['header-link_wrapper']}>
        <Link href='/posts' className={styles.header_link}>メモをする</Link>
      </div>
    </header>
  );
}