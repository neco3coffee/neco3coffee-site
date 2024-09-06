import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

export type Note = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

export const getNoteList = async (queries?: MicroCMSQueries) => {
  const noteList = await client.getList<Note>({
    endpoint: "notes",
    queries
  })

  return noteList
}

export const getNoteDetail = async (
  id: string,
  queries?: MicroCMSQueries
) => {
  const note = await client.getListDetail<Note>({
    endpoint: 'notes',
    contentId: id,
    queries,
  })

  return note
}