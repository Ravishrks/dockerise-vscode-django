FROM python:latest
ENV PYTHONUNBUFFERED 1

##################### You can remove node dev depedency during deployment #####################

# silent warning  
RUN DEBIAN_FRONTEND=noninteractive curl -sL https://deb.nodesource.com/setup_13.x | /bin/bash - 
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs

RUN DEBIAN_FRONTEND=noninteractive npm install npm@latest -g
RUN DEBIAN_FRONTEND=noninteractive npm install --global gulp-cli postcss-cli

#################### Node Depenency for dev ###########################

# project specefic 
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip3 install -r requirements.txt
COPY app /code/
