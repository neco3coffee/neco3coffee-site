import styles from './page.module.css';
import Image from 'next/image';
import { likeImageList } from './constant';

export default function Page() {
  return (
    <>
      <h2 className={styles.aboutTitle}>About</h2>
      <div className={styles.fadeUpContainer} style={{animationDelay: '0.2s'}}>
        <p className={styles.introduceText}>neco3coffee is a software developer in Japan.</p>
        <p className={styles.introduceText}>In 2021, I worked as a mobile application engineer.</p>
        <p className={styles.introduceText}>In 2022, I worked as a infrastructure engineer.</p>
        <p className={styles.introduceText}>In 2023, I worked as a web application engineer.</p>
        <p className={styles.introduceText}>I am currently working as a front-end developer</p>
      </div>
      <h2 className={styles.outsideOfWorkTitle}>Outside of work</h2>
      <div className={styles.fadeUpContainer} style={{animationDelay: '0.4s'}}>
        <p className={styles.introduceText}>I like the following ...</p>
        <div className={styles.gridContainer}>
          {likeImageList.map((image) => {
            return (
              <div className={styles.gridItem}>
                <Image
                  src={image.src}
                  fill
                  alt={image.alt}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}