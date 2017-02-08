FROM node:7.4.0

RUN useradd --user-group --create-home --shell /bin/false app

ENV HOME=/home/app

COPY package.json $HOME
COPY webpack.config.js $HOME

USER app

WORKDIR $HOME

RUN npm install
