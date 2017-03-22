FROM node

MAINTAINER Reekoh

WORKDIR /home

# copy files
ADD . /home

# Install dependencies
RUN npm install

# setting need environment variables
ENV PLUGIN_ID="demo.gateway" \
    PIPELINE="demo.gateway.pipeline" \
    PORT="8080" \
    KEY="" \
    CERT="" \
    CA="" \
    CRL="" \
    CONFIG="{}" \
    OUTPUT_PIPES="" \
    LOGGERS="" \
    EXCEPTION_LOGGERS="" \
    BROKER="amqp://guest:guest@172.17.0.2/"

EXPOSE 8080
CMD ["node", "app"]