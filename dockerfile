FROM node:latest

WORKDIR /api

COPY . .

RUN rm -rf node_modules
RUN npm i

CMD ["node", "server.js"]

EXPOSE 3000
