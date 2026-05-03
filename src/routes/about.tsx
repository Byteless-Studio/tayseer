import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="mx-auto w-[min(1080px,calc(100%-2rem))] px-4 py-12">
      <section className="rounded-2xl bg-beige border border-beige-dark p-6 sm:p-8">
        <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-2">
          About
        </p>
        <h1 className="font-serif tracking-[-0.02em] mb-3 text-4xl font-bold text-foreground sm:text-5xl">
          A small starter with room to grow.
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-muted-foreground">
          TanStack Start gives you type-safe routing, server functions, and
          modern SSR defaults. Use this as a clean foundation, then layer in
          your own routes, styling, and add-ons.
        </p>
      </section>
    </main>
  )
}
