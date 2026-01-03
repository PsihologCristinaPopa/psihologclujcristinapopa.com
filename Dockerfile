FROM nginx

EXPOSE 443

COPY default.conf /etc/nginx/conf.d/default.conf
COPY src /usr/share/nginx/html 
