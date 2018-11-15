FROM node:latest
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
RUN mkdir -p /api
WORKDIR /api
COPY package.json ./
RUN npm install
COPY . ./
RUN npm uninstall bcrypt
RUN npm install bcrypt
EXPOSE 3000
CMD [ "npm", "start" ]