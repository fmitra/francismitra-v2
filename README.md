# francismitra

Source code for [francismitra.com](http://francismitra.com)

## Overview

* Node v8.11.3
* Yarn v1.3.2

## Development

Webpack dev server will on port `4000`

```
yarn install
yarn start
```

## Deployment

```
yarn build
```

Legacy Django site redirected users to wwww domain and required a trailing slash,
so we need to budget for both in the new config. In this case, we will remove them.

```
server {
  listen 80;
  listen 443 ssl;

  ssl_certificate /etc/nginx/certs/ssl-francismitra.crt;
  ssl_certificate_key /etc/nginx/certs/ssl-francismitra.key;

  server_name www.francismitra.com;
  return 301 $scheme://francismitra.com$request_uri;
}

server {
  listen 80;
  listen 443 ssl;

  ssl_certificate /etc/nginx/certs/ssl-francismitra.crt;
  ssl_certificate_key /etc/nginx/certs/ssl-francismitra.key;

  server_name francismitra.com;
  # Remove trailing slash from all URLs
  rewrite ^/(.*)/$ /$1 permanent;

  location / {
      alias /var/opt/francismitra-v2/dist/;
      index index.html;
      try_files $uri $uri/ index.html =404;
  }
}
```
