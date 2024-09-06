import { getNoteList, getNoteDetail } from "@/app/_libs/microcms"
import styles from './page.module.css'
import Image from 'next/image'
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import parse from 'html-react-parser';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Tokyo");

export async function generateStaticParams() {
  const { contents } = await getNoteList()

  return contents.map((note) => {
    id: note.id
  })
}

export default async function Page({ params }: { params: { id: string}}) {
  const { id } = params
  const note = await getNoteDetail(id)

  return (
    <>
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <Image 
            src={note.eyecatch?.url as string}
            fill
            alt={note.title}
          />
        </div>
        <h1 className={styles.title}>{note.title}</h1>
        <p className={styles.published}>published {dayjs(note.publishedAt).tz().format('YYYY/MM/DD HH:mm')}</p>
      </div>
      <div className={styles.contentContainer}>
        {parse(note.content)}
      </div>
    </>
  )
}