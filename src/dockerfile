FROM node:14-alpine AS build

WORKDIR /home/node

COPY . /home/node

RUN npm install --no-cache

RUN npm run build

FROM nginx:alpine AS deploy

COPY --from=build /home/node/dist /usr/share/nginx/html