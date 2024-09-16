FROM node:18

WORKDIR /app

COPY src/package*.json ./

RUN npm install

COPY ./src /app/src

EXPOSE 3001

CMD ["node", "src/server.js"]