FROM ubuntu:18.04
RUN apt-get update && \
    apt-get install -y \
    apache2 \
    nodejs \
    nano \
    mongodb \
    npm
EXPOSE 3000