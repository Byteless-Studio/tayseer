import { createFileRoute } from '@tanstack/react-router'
import { loadOne } from '#/lib/lectures'

export const Route = createFileRoute('/api/lectures/$videoId')({
  server: {
    handlers: {
      GET: ({ params }) => {
        const lecture = loadOne(params.videoId)
        if (!lecture) return new Response('Not found', { status: 404 })
        return Response.json(lecture)
      },
    },
  },
})
