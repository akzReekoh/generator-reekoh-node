FROM node

MAINTAINER Reekoh

WORKDIR /home

# copy files
ADD . /home

# Install dependencies
RUN npm install

# setting need environment variables
ENV PLUGIN_ID="demo.inventory-sync" \
    CONFIG="{}" \
    LOGGERS="" \
    EXCEPTION_LOGGERS="" \
    BROKER="amqp://guest:guest@172.17.0.2/"

CMD ["node", "app"]