FROM node:lts-buster
RUN git clone https://github.com/1praise7012/MASTER-IP_MD-V3.git /root/anayat-khan
WORKDIR /root/tkt-tech
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
