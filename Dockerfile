FROM node:8.11-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package*.json", "./"]
RUN npm install --production
COPY . .
RUN npm run compile
EXPOSE 3000
CMD npm start