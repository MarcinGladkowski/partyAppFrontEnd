FROM node:10.5

RUN mkdir -p /usr/src/app/frontend

WORKDIR /usr/src/app/frontend

COPY package.json .

RUN npm install

COPY . .

RUN npm install -g @angular/cli

EXPOSE 4200 49153

