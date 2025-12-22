import { getNoteList } from "@/app/_libs/microcms";
import styles from './page.module.css';
import Link from 'next/link'
import Image from 'next/image'
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

export default async function Page() {
  const { contents } = await getNoteList()

  if (!contents || contents.length === 0) {
    return <h1>No Contents</h1>
  }

  return (
    <>
      <h2 className={styles.title}>Notes</h2>
      <div className={styles.fadeUpContainer}>
        <div className={styles.gridContainer}>
          {contents.map((note) => {
            return (
              <Link href={`/notes/${note.id}`} key={note.id} className={styles.cardContainer}>
                <div className={styles.cardImageContainer}>
                  <Image
                    src={note.eyecatch?.url as string}
                    fill
                    alt={note.title}
                  />
                </div>
                <h3 className={styles.cardTitle}>{note.title}</h3>
                <p className={styles.cardDate}>{dayjs(note.publishedAt).tz().format('YYYY/MM/DD HH:mm')}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}