FROM node:latest

RUN npm install -g ts-node

RUN apt-get update
RUN apt-get -y install wget systemctl
RUN wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.60.0/otelcol_0.60.0_linux_amd64.deb
RUN dpkg -i otelcol_0.60.0_linux_amd64.deb

COPY /config.yaml /etc/otelcol/

RUN mkdir /app
WORKDIR /app

COPY /package* ./
RUN npm install

COPY / ./


CMD ["ts-node", "src/index.ts"]