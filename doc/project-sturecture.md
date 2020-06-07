# Project Sturecture

This section will help you to understand how project is structured and how it will boost your development cycle and some mathelogies behind this project.

## Why we need such tyupe of setup

Django is great for backend as well as frontend but to make it more interactive we need some Javascript library and we should save ourselves from reinventing the wheel and invest same amount of time for best practices.

Development enviroment is easy but we deployment causes real challanges and it is tough specially for new comer in Django.

## What we try to achieve

* Used Django as backend

* Used alpine.js to achieve component styled design

* Use the power of tailwind css to support compomnent style design

* Used Gulp as task runner to automate common tasks and have pre setup for Django development

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
