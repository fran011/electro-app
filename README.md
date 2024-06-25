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
