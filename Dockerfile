# ── Stage 1: build ───────────────────────────────────────────────────────────
# Installs all dependencies and runs `vite build`, which produces `.output/`
# via Nitro. Source files and node_modules are discarded after this stage.
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ── Stage 2: runtime ─────────────────────────────────────────────────────────
# Only `.output/` is copied — no source, no node_modules. Nitro bundles
# everything the server needs into `.output/server/index.mjs`.
#
# PORT is intentionally not set here. Cloud Run injects it at runtime and
# Nitro reads process.env.PORT automatically.
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/.output ./
ENV NODE_ENV=production
EXPOSE 8080
CMD ["node", "server/index.mjs"]
