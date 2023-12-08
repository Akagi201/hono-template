FROM oven/bun:1-slim

WORKDIR /app
COPY . .

RUN bun install

EXPOSE 3000/tcp
CMD ["bun", "prod"]
