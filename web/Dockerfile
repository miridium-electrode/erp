# development
FROM node:12.21.0-alpine3.10 AS dev
COPY . /app/web
WORKDIR /app/web
RUN npm install
CMD [ "npm" "start" ]
