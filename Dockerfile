FROM node:22-alpine AS base

WORKDIR /app

COPY . .

RUN npm ci --legacy-peer-deps

RUN npm run build

RUN npm prune --production --legacy-peer-deps

EXPOSE 80

CMD ["npm", "start"]
