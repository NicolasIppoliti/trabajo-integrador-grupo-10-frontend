
# Trabajo Integrador Grupo 10

## Descripción

Este proyecto es una aplicación web desarrollada como parte del trabajo integrador del Grupo 10. La aplicación permite gestionar citas médicas, incluyendo la creación, actualización, cancelación y visualización de citas. También permite la descarga de recetas médicas en formato PDF.

## Tecnologías Utilizadas

### Backend

- Lenguaje: Java
- Framework: Quarkus
- Repositorio del backend : https://github.com/NicolasIppoliti/trabajo-integrador-grupo-10

### Frontend

- Framework: React
- Librerías adicionales: Axios, Material-UI

## Despliegue del Backend

1. En el siguiente enlace vera un readme con las instrucciones para descargar y desplegar la API REST: https://github.com/NicolasIppoliti/trabajo-integrador-grupo-10

2. Dicho proyecto tiene un archivo llamado import.sql donde se encuentran credenciales de pacientes de prueba para ir probando el funcionamiento del sitio. Recomendamos usar la sesión de la usuaria Lucrecia ya que tiene el rol Authorized y en ella se prueban más métodos y tiene más registros.
3. Aqui estan dichas credenciales de los pacientes de prueba, se necesita el email y password:
- "gepeto@gmail.com" "Passw123-",
- "lucrecia@gmail.com" "Passw1234-", Rol:AUTHORIZED_PATIENT,
- "peter@gmail.com","Pass132-",
- "bruce@gmail.com","Pass312-"

5. Sigue las instrucciones del repositorio del backend para desplegar la API.

## Despliegue del Frontend

1. Asegúrate de tener Node.js instalado. Se recomienda utilizar la versión 20.x o superior.
    ```sh
    node -v
    ```

2. Clona el repositorio del frontend:
    ```sh
    git clone <url-de-este-repositorio>
    ```

3. Navega al directorio del proyecto frontend:
    ```sh
    cd <nombre-del-directorio-frontend>
    ```

4. Instala las dependencias necesarias:
    ```sh
    npm install
    ```

5. Inicia la aplicación:
    ```sh
    npm run dev
    ```

La aplicación debería estar corriendo en `http://localhost:5173`.

## Uso de la Aplicación

Una vez que el backend y el frontend estén desplegados, puedes acceder a la aplicación en tu navegador web y comenzar a gestionar citas médicas.

Espero que le sea de utilidad la primera versión de nuestro modelo de obra social. Cualquier feedback o contribución será bien recibida.
