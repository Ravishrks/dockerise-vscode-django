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

## Running docker-compose service in interective mode

* Building image

```docker
docker-compose exec $service $command
docker-compose exec webapp ls /etc
```