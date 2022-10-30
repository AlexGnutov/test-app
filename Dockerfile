FROM node:16.17-alpine3.15

WORKDIR /test-app
COPY src/ ./src
COPY package.json ./
RUN npm install

COPY frontend/library/src ./frontend/src
COPY frontend/library/public ./frontend/public
COPY frontend/library/package.json ./frontend
WORKDIR /test-app/frontend
RUN npm install
RUN npm run build

EXPOSE 3001

WORKDIR /test-app
CMD ["node", "src/index.js"]