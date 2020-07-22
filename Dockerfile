FROM node:10
RUN npm install -g nodemon
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY . .
COPY --chown=node:node . .
USER node
EXPOSE 8000
CMD [ "nodemon" ]