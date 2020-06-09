# Django settings convenction to automate stuff

Below are some basic conventional settings for Django to make your work automated. However, you can use your settings accounding to your way, then you need to tweak some others files too... i.e configuring volumes in ndocker-compose.yml file.

## Postgres Database

You don't need to worry about security of weak password. because database can only be accessed within container services. So, no one can comnect from outside.

However, you can change the configuration accounding to your need, then you need to change enviroment variable in docker-compose.yml file under 'db' service as it's the place where database is configured.

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

## Static files

If you use other server like wsgi with gunicorn in production, you explicetely need to handle static files, due to security and effiency reasons i.e static files need not to be processed by server, it can be directly delivered.

Below location is choses, as we decided to store static files in ..../nginx/django/static... you can change your static file location, then you need to configure your nginx config in nginx directory file as well as server volumes in docker-compose.yml files.

```python
STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR,'.././nginx/django/static/')
```

## Media files

Same config possibilities as above (static files)

```python
MEDIA_URL ='/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, '.././nginx/django/media/')
```
