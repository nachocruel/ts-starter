FROM node:16-alpine
COPY package.json /usr/local/bin/service/
COPY yarn.lock /usr/local/bin/service/
WORKDIR /usr/local/bin/service/
RUN DOCKER_ENV=1 yarn install --frozen-lockfile --production
COPY dist /usr/local/bin/service/dist/
EXPOSE 3000
WORKDIR /usr/local/bin/service/dist
ENV OPEN_EXCHANGE_URL = "https://openexchangerates.org/api"
ENV OPEN_EXCHANGE_APP_ID = "Token c0252ee0fb444d98a6625b0935888586"
ENV CONVERSION_APP_URL = "http://localhost:3001"
ENV SQS_ENDPOINT = "http://localhost:9325"
ENV ACCESS_KEY_ID = "dummy"
ENV SECRET_ACCESS_KEY = "dummy"
ENV REGION = "dummy"
ENV QUEUE_NAME = "default"
CMD [ "node", "index.js" ]
