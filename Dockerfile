FROM node

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN npm i -g yarn
RUN yarn install --production

COPY . .

EXPOSE 5000

CMD ["node", "dist:main.js"]

