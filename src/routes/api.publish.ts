import { createFileRoute } from '@tanstack/react-router'
import { createPublicKey, verify } from 'node:crypto'
import { saveOne } from '#/lib/lectures'
import type { Lecture } from '#/lib/lectures'

function loadPublicKey() {
  const raw = process.env.PUBLISH_PUBLIC_KEY ?? ''
  if (!raw) throw new Error('PUBLISH_PUBLIC_KEY not set')
  // Wrap raw 32-byte Ed25519 public key in SPKI DER format
  const spkiPrefix = Buffer.from('302a300506032b6570032100', 'hex')
  const rawKey = Buffer.from(raw, 'base64')
  const spki = Buffer.concat([spkiPrefix, rawKey])
  return createPublicKey({ key: spki, format: 'der', type: 'spki' })
}

function verifySignature(body: Buffer, sigBase64: string): boolean {
  try {
    const pubKey = loadPublicKey()
    const sig = Buffer.from(sigBase64, 'base64')
    return verify(null, body, pubKey, sig)
  } catch {
    return false
  }
}

export const Route = createFileRoute('/api/publish')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const sig = request.headers.get('x-signature') ?? ''
        if (!sig) {
          return new Response('Missing X-Signature header.', { status: 401 })
        }

        const body = Buffer.from(await request.arrayBuffer())

        if (!verifySignature(body, sig)) {
          return new Response('Invalid signature.', { status: 403 })
        }

        let data: Lecture
        try {
          data = JSON.parse(body.toString('utf-8')) as Lecture
        } catch {
          return new Response('Request body must be valid JSON.', {
            status: 400,
          })
        }

        const videoId = (data.video_id ?? '').trim()
        if (!videoId) {
          return new Response('Missing video_id field.', { status: 400 })
        }

        saveOne(data)
        console.log(`[publish] saved ${videoId}`)

        return Response.json({ ok: true, video_id: videoId }, { status: 201 })
      },
    },
  },
})
