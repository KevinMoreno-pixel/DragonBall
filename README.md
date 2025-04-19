# ApiDragonBall

----------------------------------------------------------DESCRIPCIÓN------------------------------------------------------------------------

Esta es una interfaz web basada en la API de Dragon ball (https://web.dragonball-api.com/), nos permite visualizar información detallada sobre los personajes del universo de Dragon Ball, consta con un diseño dinamico para varios dispositivos, basado en un diseño alineado con la tematica de serie.

consta de items como acordeons, cards generales, header, footer, navbar, cards de transformacion, cards de detalles y paginas mostrando los detalles del personaje, una pagina principal (Home) con información basica de todos los personajes de la API, una pagina de errores mostrando los errores que se hayan encontrado en la interfaz Web, pagina de filtros, filtrando por raza y/o genero y por ultimo una pagina de información acerca de los desarrolladores de la interfaz Web de esta misma.

---------------------------------------------------FUNCIONALIDAD DE LA PAGINA----------------------------------------------------------------

>Barra de navegación (NavBar)----------------------------------------------------------------------------------------------------------------
consta de items como: 

-Icono Home: Este nos lleva a la pagina principal de la interfaz donde se mostraran los personajes con su información principal como el nombre, Raza, Genero, el KI que tiene el personaje como base, el KI total que puede tener, afiliación y una imagen como titulo (Header) de la Api de DragonBall.

-Icono de información: Este nos llevara a la pagina de la información, donde se mostrará información acerca de los diseñadores y desarrolladores de la interfaz web consta de fotos en formato carrusel, nombre, telefono, correo, edad, universidad, facultad y sus redes sociales principales como GitHub e Instagram.

-Filtro por raza: Es un Acordeon que se despliega hacia abajo mostrando todas las razas que se encuentran en la API, este nos permitirá que al darle click se puedan mostrar todos los personajes que sean de dicha raza.

-Boton masculino: Este boton nos permitirá filtrar los personajes cuyo genero son masculinos, si ya se ha seleccionado anteriormente un filtro por raza, lo que hará sera mostrar los personajes masculinos de esa raza y si no, se mostrará todos los personajes masculinos de la API.

-Boton femenino: Este boton nos permitirá filtrar los personajes cuyo genero son femeninos, si ya se ha seleccionado anteriormente un filtro por raza, lo que hará sera mostrar los personajes femeninos de esa raza y si no, se mostrará todos los personajes femeninos de la API.

NOTA: Si se selecciona una raza con genero femenino o masculino y no hay un personaje que lo tenga, se mostrará un mensaje que diga que no se han encontrado personajes con la raza (ej:Sayayin) del genero (Ej:Female).

>Pie de pagina (Footer)----------------------------------------------------------------------------------------------------------------------
Consta de los nombres de los desarrolladores de la interfaz Web, de la mano de la universidad y el año de desarrollo.

>Descripción de personajes-------------------------------------------------------------------------------------------------------------------
Al darle click en la imagen de algun personaje, este nos llevara a una pagina de descripcion general acerca del personaje, con informacion como su nombre, raza, genero, KI base, KI total, afiliación, origen, una breve descripcion y sus transformaciones con sus imagenes y el nombre de la transformación, si el personaje no tiene transformaciones, no se mostrará nada.

>Pagina de Error-----------------------------------------------------------------------------------------------------------------------------
Al poder usar una ruta desconocida en la interfaz Web, este nos llevará a la pagina de errores donde mostrará un error en rojo mostrando la informacion de ese error.

--------------------------------------------------------TECNOLOGIAS USADAS-------------------------------------------------------------------
-Frontend: para el diseño de la pagina usamos tecnologias como Vite + React, Material MUI para el estilo de los componentes.

-Backend: Tomamos información de una API que provee los datos de los personajes de Dragon Ball (https://web.dragonball-api.com/)

-Lenguajes implementados: HTML, CSS, JAVASCRIPT y una biblioteca de JavaScript como React.jsx, React Router para la navegación entre rutas de las multiples vistas de la APP.

>GitHub: Para subir a un repositorio publico el desarrollo de la interfaz Web.

>Vercel: Usamos esta plataforma en la nube como servicio para hacer deploy y poder visualizar la interfaz Web en una ruta en la nube, basada en el marco de desarrollo web next.js 

Link => (https://api-dragon-ball-dun.vercel.app/)


