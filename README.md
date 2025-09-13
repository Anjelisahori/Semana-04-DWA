
# 🌐 Proyecto Web: Sitio con Express, EJS y Pokédex

Este proyecto es parte del laboratorio del curso **Desarrollo de Aplicaciones Web Avanzado**. Consiste en una aplicación web desarrollada con **Node.js**, usando **Express** como framework, **EJS** como motor de vistas y una estructura basada en **MVC** (Modelo - Vista - Controlador).

La aplicación incluye un formulario de contacto, una sección de administración de mensajes y una Pokédex donde se pueden registrar Pokémon. Toda la información se guarda en memoria (no persistente).

---

## 📁 Estructura del proyecto

```
/controllers
  └── mainController.js
  └── pokedexController.js
/public
  └── style.css
/routes
  └── mainRoutes.js
  └── pokedexRoutes.js
/views
  └── home.ejs
  └── about.ejs
  └── contact.ejs
  └── admin.ejs
  └── pokedex.ejs
  └── notFound.ejs
app.js
package.json
```

---

## 🚀 Funcionalidades implementadas

* Página de inicio con navegación.
* Página "Acerca de".
* Formulario de contacto.
* Vista de administración que muestra los mensajes recibidos.
* Vista personalizada para errores 404.
* Pokédex donde se pueden registrar y mostrar Pokémon.
* Uso de **MaterializeCSS** para el diseño visual y responsive.
* Estilos personalizados con CSS externo (`style.css`).

---

## 🛠 Tecnologías utilizadas

* Node.js
* Express
* EJS (Embedded JavaScript Templates)
* MaterializeCSS (CDN)
* HTML5, CSS3
* JavaScript

---

## 📸 Capturas de pantalla sugeridas

1. Página de inicio con navbar.
2. Formulario de contacto.
3. Vista de administración con mensajes.
4. Pokédex con formulario y tabla de Pokémon.
5. Página de error 404 personalizada.

---

## 🔧 Cómo ejecutar el proyecto

1. Clona el repositorio:

   ```
   git clone https://github.com/tuUsuario/tu-repo.git
   cd tu-repo
   ```

2. Instala las dependencias:

   ```
   npm install
   ```

3. Ejecuta el servidor:

   ```
   node app.js
   ```

4. Abre en tu navegador:

   ```
   http://localhost:3000
   ```

---
