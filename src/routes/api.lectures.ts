import { createFileRoute } from '@tanstack/react-router'
import { loadAll } from '#/lib/lectures'

export const Route = createFileRoute('/api/lectures')({
  server: {
    handlers: {
      GET: () => Response.json(loadAll()),
    },
  },
})
