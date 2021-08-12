FROM node:14-alpine

WORKDIR /src

RUN set -x \
    && apk add git --no-cache \
    && yarn \
    && yarn build

FROM nginx:alpine

COPY --from=0 /src/build /usr/share/nginx/html
COPY --from=0 /src/docker/prod/nginx.conf /etc/nginx/conf.d/default.conf