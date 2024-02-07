#FROM node:lts-alpine as build-stage
#WORKDIR /app
#COPY package*.json ./
#RUN yarn install
#COPY . .
#RUN yarn build

#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

FROM node:16.15.0 as build-stage
WORKDIR /app
COPY package*.json ./

RUN yarn config set ignore-engines true

RUN yarn install
COPY . .
RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
