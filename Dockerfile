FROM python:latest
ENV PYTHONUNBUFFERED 1

# project specefic 
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip3 install -r requirements.txt
WORKDIR /code/app/
