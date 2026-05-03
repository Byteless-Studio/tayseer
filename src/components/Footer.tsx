import { Link } from '@tanstack/react-router'
import { siteConfig } from '#/config/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link to="/" className="no-underline inline-block mb-2">
              <img src="/tayseer-logo.webp" alt={siteConfig.name} className="h-7 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">{siteConfig.tagline}</p>
          </div>

          <div className="flex gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground">
                Courses
              </span>
              <Link to="/arabic-with-mufti-saim/arabic-101" className="text-foreground/70 no-underline hover:text-foreground transition-colors">
                Arabic With Mufti Saim
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground">
                Tools
              </span>
              <Link to="/cognates/" className="text-foreground/70 no-underline hover:text-foreground transition-colors">
                Cognates
              </Link>
              <Link to="/quizzes" className="text-foreground/70 no-underline hover:text-foreground transition-colors">
                Quizzes
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>© {year} {siteConfig.name}. All rights reserved.</span>
          <span>Built with care for Arabic learners.</span>
        </div>
      </div>
    </footer>
  )
}
