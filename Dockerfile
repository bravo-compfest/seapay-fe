FROM node:10.16

WORKDIR /usr/src/app

COPY . .

CMD npm install && npm start

EXPOSE 3000:3000