# Gulp details

## Section 1

Here name corresponds to django-project name, defaultbis app.  You can change accounding to your need.

```javascript
const djangoSetup = {
    rootLocation: './',
    name: 'app',
    devProxyServer: "http://localhost:8000"

}
```

## Section 2

* Here gulp mainstains your templating. main, users, articles is simply app name inside your project.

* base.htnl, index.html is template, part of main app. If you configure here, you don't need to manually create templates files i.e creating base.html... Previously you need to create templates/appName/template.html.

* Gulp automates creating template for you, You just have to declate your project template structure.

* It is handy, because, it gives clear idea how many template file are you usimng in one place, and it's easy to maintain and optimize.

* You are given 'src' folder to declear your tem,plate, which keeps frontend and backend seperate, gives better development experiance.

```javascript
let appTemplates = {
    main: {
        templates: ['base.html', 'index.html']

    },
    users: {
        templates: ['login.html', 'logout.html']

    },
    article: {
        templates: ['article.html']

    },
}
```
