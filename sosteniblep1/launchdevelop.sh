docker run  -p 443:443 \
   -v $PWD:/usr/share/nginx/html \
   -v $PWD:/etc/nginx/html \
   -v /home/jj/actualizar/proyectos/ciudadesinclusivas/4r/Monogatari/dist/engine:/etc/nginx/html/engine \
   -v $PWD/sample.conf:/etc/nginx/conf.d/sample.conf \
   -v $PWD/certs:/certs \
   nginx  
