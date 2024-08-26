import styles from './index.module.css'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footerContainer}>
      <p>© {currentYear} <Link href={'https://x.com/neco3coffee'}>neco3coffee</Link></p>
    </footer>
  )
}