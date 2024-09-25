import { ImageResponse } from 'next/og'
import { getNoteDetail } from '@/app/_libs/microcms'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { id: string }}) {
  const { id } = params
  const note = await getNoteDetail(id)

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: `url(${note.eyecatch?.url})`,
          backgroundSize: '1200px 630px',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            color: 'white',
            background: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10.7px)',
            padding: '16px',
          }}
        >
          {note.title}
        </h1>
      </div>
    ),
    {
      ...size,
    }
  )
}