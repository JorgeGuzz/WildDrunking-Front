# Wild DrunKing :tropical_drink:

**Grupo:** Web-0

**Integrantes:** Antonia González, Jorge Guzmán y Natalia Zamorano

## Entrega Final

### Páginas

Se agregaron páginas secretas para el Administrador, las cuales solo son accesibles mediante URL directo, las rutas relativas de estas páginas son:

- `/admin/log_in` : Para el inicio de sesión del administrador
- `/admin/remove_users` : Para que el administrador sea capaz de borrar usuarios de la base de datos

## Entrega 2

### Páginas

Las páginas de la entrega pasada fueron migradas en su totalidad a React, aunque las de Login y Signup son meramente decorativas de momento. Además se crearon las páginas de documentacion las cuales aun no son migradas a React, estas son:

- documentation.html
- doc_partida.html
- doc_juego.html

Y son las unicas paginas que deberian ser revisadas fuera de React en esta entrega.

Para la revisión de las aplicación en React, es necesario pararse en la carpeta de `/react_app`, instalar las dependencias, crear el `.env` con la URL al backend guardada como `"REACT_APP_SERVER_URL"` y finalmente correr `npm start`. La navegación entre páginas puede realizarse mediante la navbar o revisando las rutas en el archivo `Routing.js`

### Componentes

En el siguiente árbol se puede observar la estructura general de los componentes y subcomponentes creados a la hora de migrar la aplicación a React

```
├── Game
│   ├── Tablero 
│   │         ├── Hex         
│   │         └── Ficha
│   └── RightGrid
│               ├── PlayArea
│               │          ├── InfoScreen
│               │          ├── DadoSelection
│               │          └── ShotSelection
│               └── PlayerStatusGrid
│                                  ├── CoctelesDisplay
│                                  └── ShotsDisplay
├── Header
├── Footer
├── LandingPage
├── AboutGame
├── AcercaDeNosotros
├── Instrucciones
├── Login
├── Signup
├── SalaDeEspera
├── SalaPreJuego
│
**** Los Sprites son subcomponentes en varias partes ****
│
├── SpriteCasilla
├── SpriteCoctel
├── SpriteDado
├── SpriteShot
├── SpriteGeneral
└── SpriteAnimal
```

### Jugadas

Para realizar las jugadas que requieren conexión con la API, es necesario estar en la pagina de `/game` en React, en esta se encontraran los siguientes botones:

- Actualizar Info : Permite hacer un GET sobre el turno actual y el id del jugador al que corresponde
- ¡Lanzar Dado! : Permite hacer un GET que simula el lanzamiento de un dado default
- Pasar Turno : Permite hacer un POST el cual al ser realizado por el jugador en turno hace que su turno acabe y pase al siguiente jugador (para ver reflejado el cambio en la pantalla de información es necesario hacer GET con el boton de Actualizar Info)

### Consideraciones Adicionales

- Se debe correr ESLint en la carpeta de react_app, ya que es donde se encuentra realmente el proyecto y no nos pusimos a corregir errores del linter en archivos externos a esta carpeta, ya que eventualmente desapareceran.
- Como aun no existe autenticación de usuario, los valores del id del usuario y la partida actual se definen en el mismo codigo de momento.
- Para ir avanzando de turnos es necesario ir haciendo el POST desde los distintos id's de usuarios que en el caso de la "match" con id=0 los jugadores tienen los id's 0, 1, 2 y 3. Esto se puede hacer con Postman o cambiando directamente los valores en `InfoScreen.js`.

## Entrega 1

### Páginas
- Landing page (landingpage.html, style_landing_page.css)
- Header (header.html, header.css)
- Footer (footer,html, footer.css)
- About the Game (about_game.html, style_about.css)
- Nosotros (acercadenosotros.html, style_acerca_de_nosotros.css)
- Instrucciones (instrucciones.html, instrucciones.css)
- Log In (login.html, style_form.css)
- Sign Up (signup.html, style_form.css)
- Sala de espera (sala_espera.html, style_sala_espera.css)
- Sala pre juego (sala_prejuego.html, style_sala_prejuego, pre_juego.js)
- Juego (game.html, game.css, game.js)

Además, hay algunas vistas repetidas que cambian levemente entre los distintos tipos de usuario (admin, visita, registrado).

### Navegación
Se puede hacer click en cualquier página (archivos html) y en ellos será capaz de llegar a las otras, aunque se sugiere comenzar en la *landing page*.

- El *header* y *footer* son visibles en todas las páginas. 
- Desde el *header* se puede llegar a las páginas de *admin login*, *login*, *signup*, *landing page*, *about the game*, *nosotros*, *instrucciones* y *sala de espera*.
- Desde la *sala de espera* al hacer click en *"Join a private game"*, *"New game"* o *"Join"* se redirige a la *sala pre juego*.
- Desde la *sala pre juego* es posible llegar al *juego* al hacer click en el botón *"Start game"*.
- Al hacer click en *Log In* (tanto para admin como usuario normal) o en *Sign Up* dentro de los forms, se redirige a la *landing page* respectiva
- Al hacer click en *Log Out* desde la vista de admin se redirige a la *landing page* de un usuario normal.
- Las vistas de un usuario tipo visita son casi las mismas de las de un usuario normal, solo cambia el *header* (un usuario registrado puede cerrar sesión, uno visita puede iniciar sesión o registrarse) y no puede ver ninguna ventana que lleve al *juego*.

### Consideraciones adicionales
- Los sprites son hechos a mano, a excepción de los sprites de Mono, Conejo y Gallina (ver fuentes).
- En la carpeta Utilities hay un archivo de python que utilizamos para cortar el tamaño de los sprites de manera automática (hecho por Jorge Guzmán). Esto no tiene ninguna otra función en la tarea y solo está en el repositorio para poder utilizarlo desde cualquiera de nuestros tres computadores.
- Se siguió en su gran mayoría el estilo propuesto en los mockups en la Entrega 0, solo hay diferencias básicas, por ejemplo, se agregaron más páginas pedidas en el enunciado (E1) como la de *Nosotros*.
- En la página de *juego* se ve cómo es el juego de forma estática (distribución de información, botones, etc.), y al hacer click en las casillas, estas cambian de imagen, esto con el objetivo de mostrar que el cambio es posible y cómo se vería, sin embargo, en el juego real no cambiará con el click del jugador, sino con casillas determinadas (tornado, por ejemplo).
- Como se conversó en la reunión del feedback de la E0, nuestro juego no necesita de un administrador todavía, sin embargo, se agregó de todas formas una vista donde el administrador será capaz de ver los datos de los jugadores y de los juegos, además de iniciar sesión (solo la vista), con tal de cumplir el requisito del enunciado.
- La guía de instrucciones menicionada en *instrucciones* es algo que queremos implementar para próximas entregas, que básicamente es lo mismo de la entrega 0.

### Fuentes
- Sprites (3) personajes: https://www.pinterest.cl/pin/181551428706883473/
- Google font *"Press Start 2P"*: https://fonts.google.com/specimen/Press+Start+2P?preview.text=Wild%20DrunKing&preview.text_type=custom
- Google font *"Dosis"*: https://fonts.google.com/specimen/Dosis/tester?preview.text=Username:%20Password:%20Don%27t%20have%20an%20account%3F&preview.text_type=custom&subset=latin
- Imágenes clickeables como radio buttons: https://yogeshchauhan.com/how-to-use-images-instead-of-html-radio-buttons-using-css/
- Hexágono con imagen dentro: https://codepen.io/user1112/pen/PoQXppm
- Footer y header en las páginas: https://www.quora.com/How-do-I-include-a-header-and-footer-file-in-every-HTML-page-we-are-designing
