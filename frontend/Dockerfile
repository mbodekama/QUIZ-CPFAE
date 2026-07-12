# Service « web » — build de la PWA React puis service statique par nginx.

# --- Étape 1 : build ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Étape 2 : nginx ---
FROM nginx:1.27-alpine
# Config nginx (statique + proxy /api)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Artefacts de build
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
