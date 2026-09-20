FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

ARG DEFAULT_PORT=80

ENV PORT $DEFAULT_PORT

EXPOSE $DEFAULT_PORT

CMD ["npm", "start"]