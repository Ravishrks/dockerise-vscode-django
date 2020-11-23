# dockerise-vscode-django

Hello,
Leverage the power of VScode docker container  to use, pre configured setup of django, node, alpine, tailwind with gulp taskrunner.

You can test even https connection without deploying to cloud. And use locally generated ssl certificate in production. Which means zero configuration deployment.

It is truely zero latency between production and development enviroment.

## What is this repository for

* Django is great for backend and if we combine it with alpine.js , it results in nice frontend experiance as well.

* This setup is packed with django, node enviroment, gulp as task manager as well as tailwind css out of the box.

* This project will help you to deploy production ready application on cloud using docker container.

* We aim to give support for production ready guidelines for application like serverless application i.e Using Google's cloud run

* Version : 1.0.1

## How do I get set up

### Requirements

* [Docker](https://www.docker.com/get-started)
* [Vscode](https://code.visualstudio.com)

#### Clone the project

```bash
 git clone https://github.com/Ravishrks/dockerise-vscode-django.git
```

#### Setup VsCode dev enviroment

* Plugin required
  
  -- [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)

* Go to project directory

```bash
cd dockerise-vscode-django
```

* When you open your project folder in VsCode, you will see some 'double angular 45`b tilted' icon, click on that icon, that will give you option to open your project in container. You have to click on 'Reopen in container option'

* You will be given multiple option to choose container configuration, click on 'From docker-compose.yml' you will also see text like, from existing docker-compose.yml file (under same option).

* You will be asked to choose a service. You have to click on 'devenv'.

* It will take some time in first build, after sometime you will have your linux development ready, pre configured for development enviroment.

* Copy "scripts" and "devDependencies" from 'dev_depedencies.json' to your 'package.json.

The devdevencies are needed for your node enviroment setup, you can also install all packages manually or copy scripts and run 'npm install'

* Init the npm with npm init command

```sh
npm init -y
```

* Install npm depedencies

```bash
npm install
```

#### Nginx setup

You will find markdown having instruction for setup in ./nginx directory

#### Django setting recommandation

You will find instruction on ./doc/django-settings-recommandation.md

### Google cloud ssl setup and configuration

See instruction in ./doc... file

### To get insight about project structure and whey specefic type of file exist.

See instruction in ./doc... file

#### Database setup for django project

You have to choose below configuration in your seetings.py file to setup postgres database, otherwise default sqlite will be used

You can see, in place of host we used db, it's because docker-compose uses services name to resolve host.

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'db',
        'PORT': 5432,
    }
}
```

* Static file setting in production mode (DEBUG = False)

```python
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR,'/usr/share/nginx/static/')

# Manageing media files

MEDIA_URL ='/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, '/usr/share/nginx/media/')
```

* Static file setting in development mode (DEBUG = True)

```python
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR,'.././nginx/django/static/')

# Manageing media files

MEDIA_URL ='/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, '.././nginx/django/media/')
```


#### Django project setup

Once you create django project, you have to configure project name in gulpfile.js. See example below.
It's because, we use gulp to automate templating stuff. You don't have to manually create template folder in django project, gulp will automatically process it for you.

Change yourProjectName to your project name, default is "app".

Detailed documentation will be available soon.

```javascript
const djangoSetup = {
    rootLocation: './',
    name: 'yourProjectName',
    devProxyServer: "http://localhost:8000"

}
```

### Setup on Vscode

* Press F1, after opening project directory in VScode (same directory where docker-compose.yml stored).

* During setup, you will be given option to choose docker compose file for dev enviroment setip. You have to choose the option of existing docker-compose.yml file. Then you will be asked to choose services, you have to choose devenv as services.

* It will take some time to build images for the first time, VScode will notify you once build is complited.

* We are using docker compose enviroment with Vs code, To know how to use it clck [here](https://code.visualstudio.com/docs/remote/containers#_using-docker-compose)

## Docket cheatsheet

### Building image

```bash
docker build --tag $imageTag $directory
docker build --tag webapp:1.0 .
```

### Run interactive shell inside container

```bash
docker container run -it $imageTag /bin/bash
docker container run -it webapp:1.0 /bin/bash
```

### Sart a container based on your new image

```bash
docker run --publish $hostPort : $containerPort --detach --name $containerName $imageTag
docker run --publish 8000:8000 --detach --name myapp webapp:1.0
```

### Delete running container

```bash
docker rm --force $containerName
docker rm --force myapp
```

### Docker compose

To start and stop compose

```bash
docker-compose up
docker-compose down
```

## Production mode

* Use the production compose file, or merge with default compose file

### To use in production.

* This deploys all three services using the configuration in docker-compose.yml and docker-compose.prod.yml

* Order of file matter to override compose file

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## Helpful for django

### To create super user in composer service (Webapp)

```bash
docker-compose exec -T webapp python3 manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'adminpass')"
```
