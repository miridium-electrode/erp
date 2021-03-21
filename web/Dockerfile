# development
FROM node:12.21.0-alpine3.10 AS dev
WORKDIR /app
COPY . /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]

FROM nginx:stable-alpine
COPY --from=dev /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]