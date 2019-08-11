FROM node:12-alpine as builder

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/.next/static /usr/share/nginx/html/_next/static

CMD [ "nginx", "-g", "daemon off;" ]
