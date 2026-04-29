FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.output /app/.output

ENV NITRO_HOST=0.0.0.0

CMD ["node", ".output/server/index.mjs"]
