FROM node:12.9.0-alpine
EXPOSE 3000
COPY . /app
WORKDIR /app
ENV NODE_ENV=production

RUN npm install

CMD ["npm", "start"]
