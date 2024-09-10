## Client Gateway ##
es el punto de comunicacion entre nuestros clientes y nuestor servicios.
es el encargado de recibir las peticiones, enviarlas a los servicios correspondiente y devolver la respuesta al cliente


## Dev ##

1. Clonar el repositorio.
2. Instalar dependencias.
3. Crear un archivo `.env` basado en el `env.template`.
4. Tener levantados los miscroservicios que se van a consumir.
5. Levantar proyecto con `npm run start:dev`


## Nats ##

```
docker run -d --name nats-main -p 4222:4222 -p 8222:8222 nats

```# Client-Gateway
# client-gateway
