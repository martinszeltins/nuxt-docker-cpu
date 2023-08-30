FROM nginx:1.25.2-alpine

ENV NODE_OPTIONS=--max-old-space-size=8048

RUN apk add --update --no-cache --upgrade bash grep vim nano mc npm git

RUN npm install -g pnpm
RUN npm install -g pm2

WORKDIR /var/www

COPY ./default.conf /etc/nginx/conf.d

CMD pnpm install --force 2> >(grep -v warning 1>&2) && pnpm run build && pm2 start ecosystem.config.js && nginx -g 'daemon off;'
