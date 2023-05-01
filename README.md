# API Book

API Book es una API RESTful construida con Node.js, Express y MongoDB que proporciona información sobre libros.

## Instalación

Para instalar API Book, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio donde clonaste este repositorio.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Puedes copiar el archivo `.env.example` como base.
5. Ejecuta el comando `npm start` para iniciar el servidor.

## Uso

Para utilizar la API Book, realiza peticiones HTTP a la URL donde está alojada la API (por defecto, `http://localhost:4000/api/v1`).

La API Book cuenta con las siguientes rutas:

### /books

- GET `/books`: obtiene todos los libros en la base de datos.
- POST `/books`: crea un nuevo libro en la base de datos.

### /books/:id

- GET `/books/:id`: obtiene un libro por su ID.
- PUT `/books/:id`: actualiza un libro existente.
- DELETE `/books/:id`: elimina un libro existente.

Para más información, consulta la documentación completa de la API.

## Contribución

Si deseas contribuir a la API Book, sigue los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una rama para tu contribución (`git checkout -b mi-contribucion`).
3. Realiza los cambios necesarios y haz commit de tus cambios (`git commit -am 'Agregué mi contribución'`).
4. Haz push a la rama (`git push origin mi-contribucion`).
5. Abre un pull request y describe tus cambios.

## Licencia

API Book está bajo la licencia MIT.```
