// ─── Site-wide configuration ────────────────────────────────────────────────
// Update this file to change site metadata, navigation, or course details.
// No code changes required for schedule/location updates.

export const siteConfig = {
  name: 'Tayseer',
  tagline: 'Learn Arabic. Understand the Quran.',
  description:
    'Tayseer is a platform for learning classical Arabic through structured courses, vocabulary training, and quizzes.',
} as const

// ─── Navigation ──────────────────────────────────────────────────────────────
// Add or remove nav items here as the site grows.

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Arabic With Mufti Saim', to: '/arabic-with-mufti-saim' },
  { label: 'Cognates', to: '/cognates' },
  { label: 'Quizzes', to: '/quizzes' },
] as const

export type NavItem = (typeof navItems)[number]

// ─── Courses ─────────────────────────────────────────────────────────────────
// Add new courses as entries in this map.

export const courses = {
  'arabic-101': {
    /** S3 key prefix — must match the folder structure in the bucket */
    s3Prefix: '',
    /** CloudFront distribution URL for serving media (audio, images). */
    cloudfrontUrl: 'https://dawj2kvc54uj9.cloudfront.net',
    name: 'Arabic With Mufti Saim',
    shortName: 'Arabic With Mufti Saim',
    description:
      'A structured introduction to classical Arabic using the Medina Series, taught by Mufti Saim at Masjid Hamza.',
    /** Books in order. Add new books by pushing to this array. */
    books: [
      { number: 1, name: 'Book 1', dir: 'book-1-lectures' },
      { number: 2, name: 'Book 2', dir: 'book-2-lectures' },
      { number: 3, name: 'Book 3', dir: 'book-3-lectures' },
    ],
    resources: {
      textbooks: {
        label: 'Medina Series Books',
        url: 'https://darmakkah.co.uk/product/arabic-course-the-madinah-books-series/',
      },
    },
    /** Update schedule here — no UI changes needed. */
    schedule: {
      days: ['Monday', 'Wednesday'] as string[],
      time: 'After Maghrib',
      location: 'Masjid Hamza',
      locationUrl: 'https://masjidhamza.com',
      registrationUrl: 'https://masjidhamza.com',
    },
  },
} as const

export type CourseKey = keyof typeof courses
export type Course = (typeof courses)[CourseKey]