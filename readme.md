
# Ejemplo de 2 frontend con y sin backend.

Este proyecto contiene un ejemplo práctico de los conceptos vistos en el curso de conceptos de programación y desarrollo web de [EstoyProgramando](https://www.youtube.com/c/estoyprogramando). 

El proyecto consiste en el mismo frontend con la misma función pero uno desarrolla su lógica localmente y el otro envía una solicitud a un backend que se encuentra remotamente instalado.

Se quiere demostrar como un frontend puede hacer los cálculos de manera local o de manera remota.

# Desarrollo

Existen 2 carpetas:
- La carpeta `sin-backend` que contiene el HTML y JS necesarios para hacer la app sumadora sin conectarse al backend
- La carpeta `con-backend` que contiene el HTML y JS necesarios para hacer la app sumadora conectandose al backend

Cada carpeta contiene la versión del frontend que se comunica con y sin el backend.

# El Backend

Se puede consultar en: https://github.com/damuz91/modulo2-practica-backend-nodejs
URL del backend: https://ejemplo-backend-js.herokuapp.com/

El proyecto `backend` contiene la app que hace de servidor. Para efectos prácticos la he montado en el servicio Heroku, en donde se pueden alojar pequeños servidores de manera gratuita. Es posible montar este servidor de manera local si es que se tiene Nodejs instalado y NPM. En cuyo caso bastaría con correr los siguientes comandos:
- `npm install` (Estando en la carpeta backend)
- `node server.js` -> Inicia el servidor en `localhost:8081` 

La URL de heroku está parametrizada en el archivo `index.js` del frontend que requiere backend.

Si se corre el servidor de manera local entonces hay que cambiar esa URL para que corresponda a `localhost:8081`.

xoxo