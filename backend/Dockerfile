FROM node:alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

COPY . ./

RUN yarn

EXPOSE 8000

CMD ["/bin/bash", "/docker-entrypoint.sh"]
