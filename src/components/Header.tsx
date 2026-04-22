import { Link } from '@tanstack/react-router'
import { navItems, siteConfig } from '#/config/site'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-black">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link to="/" className="no-underline shrink-0">
          <img
            src="/tayseer-logo.webp"
            alt={siteConfig.name}
            className="h-8 w-auto"
          />
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link-light whitespace-nowrap shrink-0"
              activeOptions={item.to === '/' ? { exact: true } : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
