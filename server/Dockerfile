FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json  ./

RUN npm ci --production=true
#  RUN npm install -g node-prune
COPY . .
#  RUN npm prune --production



FROM node:16-alpine
COPY --from=build  ./app/dist/ /app/dist
COPY --from=build ./app/node_modules  /app/node_modules
 COPY  --from=build ./app/package*.json  /app
 COPY  --from=build ./app/ormconfig.js  /app
COPY --from=build ./app/.env /app
COPY --from=build ./app/public  /app
WORKDIR /app
 CMD ["npm","start"]