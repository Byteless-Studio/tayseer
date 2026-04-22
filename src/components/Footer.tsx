import { Link } from '@tanstack/react-router'
import { siteConfig } from '#/config/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <Link to="/" className="no-underline inline-block mb-2">
              <img
                src="/tayseer-logo.webp"
                alt={siteConfig.name}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <span className="section-label">Courses</span>
              <Link to="/arabic-101" className="text-gray-600 no-underline hover:text-black">
                Arabic With Mufti Saim
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="section-label">Tools</span>
              <Link to="/cognates" className="text-gray-600 no-underline hover:text-black">
                Cognates
              </Link>
              <Link to="/quizzes" className="text-gray-600 no-underline hover:text-black">
                Quizzes
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6 flex items-center justify-between text-xs text-gray-400">
          <span>© {year} {siteConfig.name}. All rights reserved.</span>
          <span>Built with care for Arabic learners.</span>
        </div>
      </div>
    </footer>
  )
}
