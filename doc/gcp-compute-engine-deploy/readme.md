# Deployment on Google Compute Engine

## Making production ready

### Comment out below text before deployment in Dockerfile

```docker
##################### You can remove node dev depedency during deployment #####################

# silent warning  
RUN DEBIAN_FRONTEND=noninteractive curl -sL https://deb.nodesource.com/setup_13.x | /bin/bash - 
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs

RUN DEBIAN_FRONTEND=noninteractive npm install npm@latest -g
RUN DEBIAN_FRONTEND=noninteractive npm install --global gulp-cli postcss-cli

#################### Node Depenency for dev ###########################
```

### GCP setup

#### Create vm instance with docker optimised image on compute engine

* If you are creating using GUI, make sure to tick the below option
** "Deploy a container image to this VM instance"

* Allow HTTP and HTTPS access in firewall

### Accessing vm

SSH into vm


