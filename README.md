## Levantar la app con npm
Con Node.js instalado de forma local, se puede usar npm para levantar la aplicación. Ubicarse dentro de la carpeta del proyecto y ejecutar:

```bash
# Instalar dependencias
npm install
# Compilar app y levantar servidor en el puerto 3000
npm run dev
```

## Iniciar el contenedor
Si no se tiene Node.js instalado, se puede ver la aplicación desde el contenedor de docker.

```bash
# Si es la primera vez o se realizaron cambios
docker build electro-app .
# Para iniciar en el puerto 3000
docker run -p 3000:3000 electro-app
```
## Organizacion
En la carpeta 'components' iran los respectivos componentes de React

En la carpeta 'styles' iran los estilos respectivos a cada componente con el nombre 'NombreComponente.module.css'

En la carpeta 'pages' iran los respectivos endpoints de la pagina

## Rest API
Informacion para obtener los datos de la base de datos de la pagina de Wordpress: https://developer.wordpress.org/rest-api/
Endpoints de interes: 

Ultimas novedades: https://electro.ing.unlp.edu.ar/wp-json/wp/v2/posts?categories=14

Novedades Cursos Postgrados: https://electro.ing.unlp.edu.ar/wp-json/wp/v2/posts?categories=63

Novedades Club DevOps: https://electro.ing.unlp.edu.ar/wp-json/wp/v2/posts?categories=66

Novedades Club Robotica: https://electro.ing.unlp.edu.ar/wp-json/wp/v2/posts?categories=67

Para obtener imagenes o datos guardados en la base de datos, obtener la URL que te da la biblioteca de medios en la vista de Admin de la pagina.
