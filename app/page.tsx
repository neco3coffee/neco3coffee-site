import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// import { FaTwitter, FaGithub } from "react-icons/fa";
// import { PiNotePencilBold } from "react-icons/pi";
import { getDeviceStatus } from "./_lib/swithbotclient";
import AutoRefresh from "./_components/AutoRefresh/index";

export const dynamic = 'force-dynamic';


export default async function Home() {
  const power = await getDeviceStatus({ deviceId: process.env.DEVICE_ID || "" });

  return (
    <>
      <AutoRefresh intervalMs={15000} />
      <div className={styles.fadeUpContainer} style={{ animationDelay: '0.2s' }}>
        <p className={styles.introduceText}>neco3coffee(he/him) is a software developer in Japan.</p>
        <Link href="/about">View image</Link>
      </div>
      <div className={styles.fadeUpContainer} style={{ animationDelay: '0.4s' }}>
        {/* <div className={styles.gridContainer}>
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
        </div> */}
        <Link href="/about" className={styles.workingStatusContainer}>
          <Image
            src={`/img/${power}.png`}
            alt={`I'm ${power === 'on' ? 'working' : 'resting'} now`}
            width={500} // 画像の元の幅
            height={300} // 画像の元の高さ
            style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '30px' }}
          />
        </Link>

      </div>
    </>
  );
}
