FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app/.output ./
ENV NODE_ENV=production
ENV PORT=80
EXPOSE 80
CMD ["node", "server/index.mjs"]
