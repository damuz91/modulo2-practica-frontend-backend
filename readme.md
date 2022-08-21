
# Ejemplo de 2 frontend con y sin backend.

Este proyecto contiene un ejemplo práctico de los conceptos vistos en el curso de conceptos de programación y desarrollo web de [EstoyProgramando](https://www.youtube.com/c/estoyprogramando). 

El proyecto consiste en el mismo frontend con la misma función pero uno desarrolla su lógica localmente y el otro envía una solicitud a un backend que se encuentra remotamente instalado.

Se quiere demostrar como un frontend puede hacer los cálculos de manera local o de manera remota.

# Desarrollo

Existen 3 carpetas:
1. La carpeta backend que contiene una pequeña app de NodeJS y Express en donde tiene 2 endpoints, uno por GET y otro por POST, ambos en la ruta principal `/`. La petición por POST recibe 2 parámetros en el body: `num1` y `num2`. El servidor deberá responder con la suma de ambos números. El servidor no controla ninguna excepción, esto para ejemplificar como es el manejo remoto de una lógica que no depende de nosotros.
2. La carpeta `empezar-aqui` que es el punto de partida para el alumno, en donde podrá comenzar a hacer la práctica.
3. La carpeta `terminado` en donde se puede ver los 2 frontend terminados en caso de que se quiera consultar.

# El Backend

Se puede consultar en: https://github.com/damuz91/modulo2-practica-backend-nodejs

La carpeta `backend` contiene la app que hace de servidor. Para efectos prácticos la he montado en el servicio Heroku, en donde se pueden alojar pequeños servidores de manera gratuita. Es posible montar este servidor de manera local si es que se tiene Nodejs instalado y NPM. En cuyo caso bastaría con correr los siguientes comandos:
- `npm install` (Estando en la carpeta backend)
- `node server.js` -> Inicia el servidor en `localhost:8081` 

La URL de heroku está parametrizada en el archivo `index.js` del frontend que requiere backend.

Si se corre el servidor de manera local entonces hay que cambiar esa URL para que corresponda a `localhost:8081`.

xoxo