# Project Sturecture

This section will help you to understand how project is structured and how it will boost your development cycle and some mathelogies behind this project.

## Why we need such tyupe of setup

Django is great for backend as well as frontend but to make it more interactive we need some Javascript library and we should save ourselves from reinventing the wheel. So we can focus on our core application development.

Deployment causes real challanges and it is tough specially for new comer in Django. So there should be a way to make it flawless.

## What we try to achieve

* Used Django as backend

* Used alpine.js to achieve component styled design

* Use the power of tailwind css to support compomnent style design

* Used Gulp as task runner to automate common tasks and have pre setup for Django development

Use docker to practice industry standerd development cycle and production ready application fropm begenning.

## Some methologies

* Seperated frontend and backend code and used gulp to bundle our frontend and backend togethere. For example, you don't have to make app/templates/app/template.html. You just have to make app folder in src folder and gulp will handle all the repetative task to make various folder.

* Handle frontend and backend seperately and use gulp to combine it automatically.

* After seeing folder structure of 'src' folder , you will get to know, what I want to explain.

* If we ever need to write your own css, you can write it using scss or css, in same 'src' folder, again gulp will manage all the compilation and bundling to css.

* We try to achieve real deployment enviroment in local development, so it will save your time, if you continiously want to push changes to your app.

* You can even generate and test your ssl certificate locally, which powers us zero latency between development and deployment.

## Some devops features

* We use docker to have contanerised enviroment

* When it is combined with Vscode, it make wonders. Gives the possibilities for seamless development locally as well as remotely.


## Folder structure

```bash
app : your django project
   app
        settings.py
        wsgi.py
        urls.py
   manage.py
data : used to mount data such as handling static file as well as postgres data
    django/static
    postgres
dev : special enviroment for development purpose
    Dockerfile
doc : contains documentation
   ...
nginx
    conf : contains your nginx configuration file
src : uses to contain frontend specefic file
    js : put all your js file, it will be auto bundled to one js file and production ready
    scss : put all your scss file, will be auto compiled and bundled to single css file
    templates : just like django template, alternative place to create index.html or any template file, it will be auto copied to desired app folder
        main: example of app folder
            index.html : example of template file
            base.html
        article
        users

Dockerfile
gulpfile.js : your gulp configuration and task, you can customise it and extend it
postcss.config.js : used for tailwind spwcwfic post processing css file to have production ready css file
tailwind.config.js : your tailwind specefilc config file.
dev_depedencies.json : it has depemndencies, which you need to copy it's section to your package.json before running npm install. It also has various scripts to handle common tasks, like processing tailwing css, generating requirements.txt
```

## Django webapp specefic folder structure
