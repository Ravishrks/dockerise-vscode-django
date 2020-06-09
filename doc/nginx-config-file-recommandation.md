# Nginx config file recommandation

## For development (without ssl certificate)

Although the file is pre configured and it needs no futher configuration. Here are reasons choosing certain options.

* Using webapp:8000 as proxy server address.

It is because, services defined in docker-compose recognise each other by it's name, and it's name act as host. So to access webapp 's localhost, you can simply access as webapp.

```bash
server {

    listen 80;
    server_name localhost;
    root /usr/share/nginx/;


    location /static/ {
        root /usr/share/nginx/;
    }

    # reference local container by service name, keep it below
    location / {
        proxy_pass http://webapp:8000;
        client_max_body_size 0M;
    }
}
```

## In production (Usiong ssl)

Same reasons as above

```bash
# Make sure to configure your domain name... replace example.org

server {
    listen 80;
    listen [::]:80;
    server_name domain.com www.domain.com; # edit domain name

    return 301 https://$host$request_uri;

}

server {
    server_name dockdjango.club;

    listen 443 ssl ;
    ssl_certificate /etc/letsencrypt/live/domain.com/fullchain.pem; # edit domain name
    ssl_certificate_key /etc/letsencrypt/live/domain.com/privkey.pem; # edit domain name


    # RFC-7919 recommended: https://wiki.mozilla.org/Security/Server_Side_TLS#ffdhe4096
    ssl_dhparam /etc/ssl/dhparam.pem;

    # Improve HTTPS performance with session resumption
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Aditional Security Headers
    # ref: https://developer.mozilla.org/en-US/docs/Security/HTTP_Strict_Transport_Security
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

    # ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
    add_header X-Frame-Options DENY always;

    # ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    add_header X-Content-Type-Options nosniff always;

    # ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection
    add_header X-Xss-Protection "1; mode=block" always;

    root /usr/share/nginx/;


    location /static/ {
        root /usr/share/nginx/;
    }


    location / {
        proxy_pass http://webapp:8000;
        client_max_body_size 0M;
    }

}
```
