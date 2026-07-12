# Service « app » — API Node.js/Express
FROM node:20-alpine

WORKDIR /app

# Dépendances (couche cache séparée)
COPY package*.json ./
RUN npm install --omit=dev

# Code source
COPY src ./src

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD ["node", "src/index.js"]
