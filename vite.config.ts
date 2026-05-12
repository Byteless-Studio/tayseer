// ─── vite.config.ts ──────────────────────────────────────────────────────────
// TanStack Start uses Vinxi under the hood, which wraps Vite + Nitro.
// Plugin order matters: nitro must come before tanstackStart.

import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  // Enables `#/` path alias defined in package.json "imports" field.
  resolve: { tsconfigPaths: true },
  server: {
    watch: {
      ignored: ['**/-lecture_things_to_fix.txt', '**/-lecture_things_to_fix/**'], 
    },
  },
  plugins: [
    devtools(),
    // @sentry/* packages import Node.js internals that can't be bundled
    // server-side by Rollup — mark them external so Nitro skips them.
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})

export default config
