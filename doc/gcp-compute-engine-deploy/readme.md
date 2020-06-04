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

* "Deploy a container image to this VM instance"

* Allow HTTP and HTTPS access in firewall

### Accessing vm

* SSH into vm and git clone your repo

* Go to your project directory

### Docker-compose setup

You have to configure vm to use docker-compose as it is not installed by default. 
For detailed instruction related to configuration , click [here](https://cloud.google.com/community/tutorials/docker-compose-on-container-optimized-os)

### You can follow below steps to set up docker-compose

#### Install docker-compose 

```docker
docker run docker/compose:1.24.0 version
```

#### Making an alias to Docker Compose

The docker run ... docker/compose:1.24.0 up command is equivalent to running the docker-compose up command on systems where Docker Compose is installed by the usual method.
So that you don't have to remember or type this long command, create an alias for it.

```docker
echo alias docker-compose="'"'docker run --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$PWD:$PWD" \
    -w="$PWD" \
    docker/compose:1.24.0'"'" >> ~/.bashrc
```

#### Reload the Bash configuration.

```docker
source ~/.bashrc
```

## Congrats... you have done it

### To run docker compose

```docker
docker-compose up
```

### To stop docker compose

```docker
docker-compose down
```

## Activating ssl using certbot and Let's Encrypt

* Make sure to copy the content of the Google's service account credentials to dns-api-secret-key.json

* Go to directory doc/gcp-computr-engine-deploy and run below command.
  
* Below command will generate ssl certificate from letsencrypt

* Make sure to edit the details in doc/gcp-computr-engine-deploy/docker-compose.yml. Such as email address and see the instructions there

* After running below command your ssl will be configured and will be ready to use. Just stop this container with docker-compose down command.

* Go to your project directory, and run docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

* Congratulation, you have done it... Enjoy easy development cycle.
  
```docker
docker-compose up
```

* The good part is , you can test ssl on your local computer, without deploying to google cloud.
* For this, you have to edit your host file and add an entry to 127.0.0.1 to your domain name, so it can point your local computer
