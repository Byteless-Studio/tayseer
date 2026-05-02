import { createFileRoute, Outlet } from '@tanstack/react-router'

// Layout parent for all /arabic-101/* routes.
// Child routes render inside <Outlet />.
export const Route = createFileRoute('/arabic-with-mufti-saim/arabic-101')({
  component: () => <Outlet />,
})
