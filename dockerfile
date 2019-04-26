FROM node:10.15-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run docker:build

EXPOSE 3000

CMD ["npm", "run", "docker:start"]