FROM node:18

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

RUN npm run build

CMD ["npm", "run", "start-docker"]
