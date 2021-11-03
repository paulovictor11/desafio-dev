FROM wyveo/nginx-php-fpm:php74

WORKDIR /usr/share/nginx

COPY ./.docker/nginx/default.conf /etc/nginx/conf.d/default.conf

CMD [ "composer", "start" ]