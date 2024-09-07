FROM nginx

RUN apt update && apt upgrade

EXPOSE 443

COPY src /usr/share/nginx/html 
