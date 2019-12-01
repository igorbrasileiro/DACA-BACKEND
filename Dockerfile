FROM node:12
WORKDIR /app
COPY package.json .
RUN npm install --production
ADD . /app
RUN cp .env.examples .env
RUN npm run start:db
CMD npm start
EXPOSE 4000