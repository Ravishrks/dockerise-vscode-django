# Types of nginx config files

## For development

* mysite.conf is considered

## For Production with ssl

* mysite-ssl.conf is considered

* Make sure to edit this file to configure your domain ... simply replace domain.com to your domain

* You need to generate dhparam.pem as well as it is used for security reasons

To generate it, run below command

Make sure to run below command from your project directory... i.e where nginx, Dockerfile exists.
So it will save the outpul in desired folder

````sh
openssl dhparam -out ./nginx/certbot/dhparam.pem 4096
```
