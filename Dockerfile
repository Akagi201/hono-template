FROM oven/bun:1-distroless

COPY package.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install --production

USER bun
EXPOSE 3000/tcp
CMD ["bun", "run", "src/index.ts"]
