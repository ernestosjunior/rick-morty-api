FROM node:14 As development

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY prisma ./prisma/ 

RUN yarn install

COPY . .

RUN yarn build

FROM node:14 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY prisma ./prisma/ 

RUN yarn install --production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3000
CMD ["yarn", "start:prod"]