import { Link } from '@tanstack/react-router'
import { navItems, siteConfig } from '#/config/site'
import { flags } from '#/config/flags'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="no-underline shrink-0">
          <img src="/tayseer-logo.webp" alt={siteConfig.name} className="h-8 w-auto" />
        </Link>

        <div className="flex items-center gap-6 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="whitespace-nowrap shrink-0 text-sm no-underline text-muted-foreground transition-colors hover:text-foreground [&[data-status=active]]:text-brand [&[data-status=active]]:font-semibold"
              activeOptions={item.to === '/' ? { exact: true } : undefined}
            >
              {item.label}
            </Link>
          ))}
          {flags.themeToggle && <ThemeToggle />}
        </div>
      </nav>
    </header>
  )
}
