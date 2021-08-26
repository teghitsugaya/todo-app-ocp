FROM node:16-alpine

ENV VUE_APP_API_URL=http://api-todo.apps.cluster-jkt03.ocp-dcb-s.datacomm.co.id

RUN mkdir /app

COPY . /app

RUN yarn --cwd /app install

CMD ["yarn", "--cwd" ,"/app", "serve"]
