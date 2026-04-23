import { createFileRoute } from '@tanstack/react-router'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { courses } from '#/config/site'
import type { Lecture } from '#/lib/arabic-101'

// TODO: re-enable signature verification when the pipeline sends the header.
// import { createPublicKey, verify } from 'node:crypto'
// function loadPublicKey() { ... }
// function verifySignature(body: Buffer, sigBase64: string): boolean { ... }

export const Route = createFileRoute('/api/publish')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = Buffer.from(await request.arrayBuffer())

        // TODO: Accept the original audio recording alongside the JSON payload.
        //
        // Currently this endpoint only receives the processed JSON (transcript,
        // summary, key_points, tags, etc.).  The pipeline should also send the
        // original .ogg / .mp3 recording so it can be stored next to the JSON
        // and served via the audio player on the lecture page.
        //
        // Suggested approach:
        //   - Switch to multipart/form-data so the audio file and JSON can be
        //     sent in a single request:
        //       form field "data"  → JSON string (Lecture)
        //       form field "audio" → binary audio file (.ogg / .mp3 / .m4a)
        //   - Save the audio file to:
        //       public/<courseDir>/<bookDir>/<lectureDir>/<lectureId>.ogg
        //   - Save the JSON to the same directory so the loader picks both up.
        //
        // Until then, audio files must be placed manually in the lecture folder.

        let data: Lecture
        try {
          data = JSON.parse(body.toString('utf-8')) as Lecture
        } catch {
          return new Response('Request body must be valid JSON.', {
            status: 400,
          })
        }

        const contentId = (data.id ?? '').trim()
        if (!contentId) {
          return new Response('Missing id field.', { status: 400 })
        }

        // Save to public/arabic-101-with-mufti-saim/book-2-lectures/<id>.json
        const book2Dir = join(
          process.cwd(),
          'public',
          courses['arabic-101'].publicDir,
          'book-2-lectures',
        )
        mkdirSync(book2Dir, { recursive: true })
        writeFileSync(
          join(book2Dir, `${contentId}.json`),
          JSON.stringify(data, null, 2),
          'utf-8',
        )

        console.log(`[publish] saved ${contentId}`)

        return Response.json({ ok: true, id: contentId }, { status: 201 })
      },
    },
  },
})
