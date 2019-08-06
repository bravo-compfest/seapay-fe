FROM node:11.8

WORKDIR /usr/src/app

COPY . .

CMD npm install && npm start

EXPOSE 3000:3000