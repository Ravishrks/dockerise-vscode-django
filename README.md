# dockerise-vscode-django
Explore the ready to use, pre configured setup of django, node, alpine with gulp taskrunner. 

Leverage the power of VS vode dockerise container. Explore the ready to use, pre configured setup of django, node, alpine with gulp taskrunner. 

### What is this repository for ###

* Django is great for backend and if we combine it with alpine.js , it results in nice frontend experiance as well.

* This setup is packed with django, node enviroment, gulp as task manager as well as tailwind css out of the box.

* This project will help you to deploy production ready application on cloud using docker container.

* We aim to give support for production ready guidelines for application like serverless application i.e Using Google's cloud run

* Version : 1.0.1
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up ###

#### Requirements

* [Docker] (https://www.docker.com/get-started)
* [Vscode] (https://code.visualstudio.com)

#### Git clone

```
 git clone https://github.com/Ravishrks/dockerise-vscode-django.git

```

### Setup on Vscode

* Press F1, after opening project directory in VScode (same directory where docker-compose.yml stored).
* It will take some time to build image, and after sometime it will be ready to use
* We are using docker compose enviroment with Vs code, To know how to use it clck [here](https://code.visualstudio.com/docs/remote/containers#_using-docker-compose)

## Docket cheatsheet

### Building image

docker```
docker build --tag $imageTag $directory
docker build --tag webapp:1.0 .
```

### Run interactive shell inside container

docker```
docker container run -it $imageTag /bin/bash
docker container run -it webapp:1.0 /bin/bash
```

### Sart a container based on your new image

docker```
docker run --publish $hostPort : $containerPort --detach --name $containerName $imageTag
docker run --publish 8000:8000 --detach --name myapp webapp:1.0
```

### Delete running container

docker```
docker rm --force $containerName
docker rm --force myapp
```

### Docker compose

To start and stop compose

docker```
docker-compose up
docker-compose down
```
