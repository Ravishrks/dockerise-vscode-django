# dockerise-vscode-django

Leverage the power of VScode docker container  to use, pre configured setup of django, node, alpine, tailwind with gulp taskrunner.

You can test even https connection without deploying to cloud. And use locally generated ssl certificate in production. Which means zero configuration deployment.

It is truely zero latency between production and development enviroment.

## What is this repository for ##

* Django is great for backend and if we combine it with alpine.js , it results in nice frontend experiance as well.

* This setup is packed with django, node enviroment, gulp as task manager as well as tailwind css out of the box.

* This project will help you to deploy production ready application on cloud using docker container.

* We aim to give support for production ready guidelines for application like serverless application i.e Using Google's cloud run

* Version : 1.0.1

## How do I get set up ##

### Requirements

* [Docker](https://www.docker.com/get-started)
* [Vscode](https://code.visualstudio.com)

#### Git clone

```docker
 git clone https://github.com/Ravishrks/dockerise-vscode-django.git
```

#### NPM setup

* Init the npm with npm init command

```sh
npm init -y
```

* Configure npm script and dependencies
  
Copy scripts and depedencied from dev_depedencies.json files to your package.json and run npm install command to install all dependencies, and you have npm scrips available to handle common tasks, like manageing tailwind, gulp task runner and many more
```

### Setup on Vscode

* Press F1, after opening project directory in VScode (same directory where docker-compose.yml stored).
* It will take some time to build images for the first time, VScode will notify you once build is complited.
* We are using docker compose enviroment with Vs code, To know how to use it clck [here](https://code.visualstudio.com/docs/remote/containers#_using-docker-compose)

## Docket cheatsheet

### Building image

```docker
docker build --tag $imageTag $directory
docker build --tag webapp:1.0 .
```

### Run interactive shell inside container

```docker
docker container run -it $imageTag /bin/bash
docker container run -it webapp:1.0 /bin/bash
```

### Sart a container based on your new image

```docker
docker run --publish $hostPort : $containerPort --detach --name $containerName $imageTag
docker run --publish 8000:8000 --detach --name myapp webapp:1.0
```

### Delete running container

```docker
docker rm --force $containerName
docker rm --force myapp
```

### Docker compose

To start and stop compose

```docker
docker-compose up
docker-compose down
```

## Production mode

* Use the production compose file, or merge with default compose file

###

To use in production.

* This deploys all three services using the configuration in docker-compose.yml and docker-compose.prod.yml.
* Order of file matter to override compose file

```docker
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
