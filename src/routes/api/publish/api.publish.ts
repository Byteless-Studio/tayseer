import { createFileRoute } from '@tanstack/react-router'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { courses } from '#/config/site'
import type { Lecture } from '#/routes/arabic-with-mufti-saim/arabic-101.types'

// TODO: re-enable signature verification when the pipeline sends the header.

const s3 = new S3Client({
  region: process.env['AWS_REGION'] ?? 'us-east-1',
  credentials: {
    accessKeyId: process.env['AWS_ACCESS_KEY_ID'] ?? '',
    secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'] ?? '',
  },
})

const BUCKET = 'arabic-with-mufti-saim-789915097776-us-east-1-an'
const course = courses['arabic-101']

export const Route = createFileRoute('/api/publish/api/publish')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const contentType = request.headers.get('content-type') ?? ''

        let data: Lecture
        let audioBuffer: Buffer | null = null
        let audioFileName: string | null = null

        if (contentType.includes('multipart/form-data')) {
          // Multipart: JSON in "data" field, optional audio in "audio" field
          let formData: FormData
          try {
            formData = await request.formData()
          } catch {
            return new Response('Failed to parse multipart form data.', { status: 400 })
          }

          const jsonField = formData.get('data')
          if (typeof jsonField !== 'string') {
            return new Response('Missing "data" field with JSON payload.', { status: 400 })
          }
          try {
            data = JSON.parse(jsonField) as Lecture
          } catch {
            return new Response('"data" field must be valid JSON.', { status: 400 })
          }

          const audioFile = formData.get('audio')
          if (audioFile instanceof File) {
            audioBuffer = Buffer.from(await audioFile.arrayBuffer())
            audioFileName = audioFile.name
          }
        } else {
          // Plain JSON body
          const body = Buffer.from(await request.arrayBuffer())
          try {
            data = JSON.parse(body.toString('utf-8')) as Lecture
          } catch {
            return new Response('Request body must be valid JSON.', { status: 400 })
          }
        }

        const contentId = (data.id ?? '').trim()
        if (!contentId) {
          return new Response('Missing id field.', { status: 400 })
        }

        // Upload JSON to s3Prefix/book-2-lectures/<contentId>/<contentId>.json
        const lecturePrefix = `${course.s3Prefix}book-2-lectures/${contentId}/`
        const jsonKey = `${lecturePrefix}${contentId}.json`

        try {
          await s3.send(
            new PutObjectCommand({
              Bucket: BUCKET,
              Key: jsonKey,
              Body: JSON.stringify(data, null, 2),
              ContentType: 'application/json',
            }),
          )

          if (audioBuffer && audioFileName) {
            const audioKey = `${lecturePrefix}${audioFileName}`
            await s3.send(
              new PutObjectCommand({
                Bucket: BUCKET,
                Key: audioKey,
                Body: audioBuffer,
                ContentType: 'audio/mpeg',
              }),
            )
          }
        } catch (err) {
          console.error('[publish] S3 upload failed:', err)
          return new Response('Failed to upload to S3.', { status: 500 })
        }

        console.log(`[publish] uploaded ${contentId} to s3://${BUCKET}/${jsonKey}`)

        return Response.json({ ok: true, id: contentId }, { status: 201 })
      },
    },
  },
})
