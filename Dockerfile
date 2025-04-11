FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 5001

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5001"] 