# To obtain ssl certificate using certbot

## For Google cloud platform (Other plateform follows similar steps)

* Run docker command | Make sure to put your secret dns json file in file ./nginx/secret/dns_secret.json

* Make sure to replace the domain name

````docker
sudo docker run -it --rm --name certbot \
            -v "nginx/certbot/letsencrypt:/etc/letsencrypt" \
            -v "nginx/certbot/lib:/var/lib/letsencrypt" \
            -v "nginx/certbot/www:/var/www/certbot" \
            -v "nginx/secret/dns-secret.json:/etc/dns-bot/dns-secret.json" \
            certbot/certbot certbot certonly \
            --dns-google --dns-google-credentials /etc/dns-bot/dns-secret.json \
            --dns-google-propagation-seconds 120 \ 
            -d example.com -d www.example.com
````