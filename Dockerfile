FROM node:14

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production

COPY . .

EXPOSE 5000

CMD ["node", "dist/main"]

