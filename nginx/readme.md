# To obtain ssl certificate using certbot

## For Google cloud platform (Other plateform follows similar steps)

* You have to create service account first ... Then you will get your secret json file 

* Create sevice will full dns admin access

* To start out, click the ‘hamburger’ menu on the left, then find ‘IAM & admin’, and finally ‘Service Accounts’:

* Run docker command | Make sure to put your secret dns json file in file ./nginx/secret/dns_secret.json

* Make sure to replace the domain name

* Make sure to edit the relative path i.e /home/myhost ... to your own path

````docker
sudo docker run -it --rm --name certbot \
            -v "/home/myhostname/dockerise-vscode-django/nginx/certbot/letsencrypt:/etc/letsencrypt" \
            -v "/home/myhostname/dockerise-vscode-django/nginx/certbot/lib:/var/lib/letsencrypt" \
            -v "/home/myhostname/dockerise-vscode-django/nginx/certbot/www:/var/www/certbot" \
            -v "/home/myhostname/dockerise-vscode-django/nginx/secret/dns-secret.json:/etc/dns-bot/dns-secret.json" \
            certbot/dns-google certonly \
            --dns-google --dns-google-credentials /etc/dns-bot/dns-secret.json \
            --dns-google-propagation-seconds 120 \
            -d example.org -d www.example.org
````