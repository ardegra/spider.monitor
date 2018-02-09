FROM node

COPY ./build /root/app

WORKDIR /root/app

RUN npm install -g serve

EXPOSE 80

CMD serve -C -p 80 .