FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG PORT=80

ENV PORT=${PORT}

EXPOSE ${PORT}

CMD ["npm", "start"]
