import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { PiNotePencilBold } from "react-icons/pi";

export default function Home() {
  return (
    <>
      <div className={styles.fadeUpContainer} style={{ animationDelay: '0.2s' }}>
        <p className={styles.introduceText}>neco3coffee is a software developer in Japan.</p>
        <Link href="/about">Read more...</Link>
      </div>
      <div className={styles.fadeUpContainer} style={{ animationDelay: '0.4s' }}>
        <div className={styles.gridContainer}>
          <Link href="/notes" className={styles.notesWrapper}>
            <PiNotePencilBold className={styles.noteIcon} />
            <h4>Notes</h4>
          </Link>
          <Link href="https://x.com/neco3coffee" className={styles.twitterWrapper}>
            <FaTwitter className={styles.twitterIcon} />
          </Link>
          <Link href="https://github.com/neco3coffee" className={styles.githubWrapper}>
            <FaGithub className={styles.githubIcon} />
          </Link>
        </div>
      </div>
    </>
  );
}
