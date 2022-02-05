FROM node

WORKDIR /tmp
COPY package.json /tmp/
ENV NODE_ENV=development
RUN npm install

WORKDIR /app
COPY package.json /app/
ENV NODE_ENV=development
RUN npm install
RUN npm install -D webpack-cli
RUN npm install -D webpack
ENV PATH=/app/node_modules/.bin:$PATH

WORKDIR /app/react/
COPY . /app/react/

RUN npx webpack