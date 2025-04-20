# 🐉 ApiDragonBall
Esta es una interfaz web basada en la **API de Dragon Ball** 👉 [Dragon Ball API](https://web.dragonball-api.com/), que permite visualizar información detallada sobre los personajes del universo Dragon Ball.

El diseño es dinámico y responsive, inspirado en la temática de la serie.
### Incluye elementos como:

- ✅ Acordeones  
- ✅ Cards generales y de detalles  
- ✅ Cards de transformaciones  
- ✅ Header  
- ✅ Footer  
- ✅ Navbar  
- ✅ Página principal (Home)  
- ✅ Página de errores  
- ✅ Página de filtros (por raza y/o género)  
- ✅ Página "Sobre nosotros" con información de los desarrolladores  

## ⚙️ FUNCIONALIDAD DE LA PÁGINA

### 🧭 Barra de navegación (NavBar):

- **Icono Home**: Muestra todos los personajes con información como nombre, raza, género, KI base, KI total, afiliación e imagen destacada.

- ℹ**Icono de información**: Dirige a la sección con info de los desarrolladores (carrusel con foto, nombre, teléfono, correo, edad, universidad, facultad y redes sociales como GitHub e Instagram).

- **Filtro por raza**: Acordeón desplegable con todas las razas disponibles en la API. Permite mostrar personajes según la raza seleccionada.

- **Botón masculino**: Filtra personajes con género masculino. Se puede combinar con raza.

- **Botón femenino**: Filtra personajes con género femenino. También se puede combinar con raza.

> ⚠️ **Nota**: Si no existen personajes con la raza y género seleccionados, se mostrará un mensaje indicando que no se encontraron resultados.

### 🔚 Pie de página (Footer):

Muestra los nombres de los desarrolladores, la universidad y el año de desarrollo.

###📜 Página de descripción de personajes:

Al hacer clic en la imagen de un personaje se abre una vista con más detalles:

- ✅ Nombre  
- ✅ Raza  
- ✅ Género  
- ✅ KI base y total  
- ✅ Afiliación  
- ✅ Origen  
- ✅ Descripción  
- ✅ Transformaciones (si tiene), con imagen y nombre  

###❌ Página de Error:

Si se accede a una ruta no válida, se mostrará una página de error con un mensaje en rojo indicando lo ocurrido.

## 🛠️ TECNOLOGÍAS USADAS

### 🎨 Frontend:

- Vite + React  
- Material UI (MUI) para los estilos  

### 🔗 Backend:

- API pública: [https://web.dragonball-api.com/](https://web.dragonball-api.com/)

### 🧩 Lenguajes y librerías:

- HTML  
- CSS  
- JavaScript  
- React.jsx  
- React Router  

### 🐙 GitHub:

> Proyecto subido a un repositorio público

### ☁️ Vercel:

> Hosting y deploy en la nube  
👉 [https://api-dragon-ball-dun.vercel.app/](https://api-dragon-ball-dun.vercel.app/)
