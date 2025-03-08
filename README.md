# Pokedex

## Node
Para ejecutar este proyectp debes de contar con Node, verifica si tienes instalado node y qué version tienes.
```
node -v
```
## Consola
Abre una consola en powershell o CLi favorito.

## Clonar
Clone este proyecto con el comando.
```
git clone https://github.com/pipefake/pokedex.git
cd pokedex
```

## Instalar dependencias
Instala las dependencias del proyecto.
```
npm install
```

### Compilar
```
npm run serve
```

### Construcion para despliegue
```
npm run build
```

### Lints 
```
npm run lint
```

# Pokedex - Prueba Técnica

## Descripción
Este proyecto es una prueba técnica para la empresa Global 66, en la cual se demuestran mis habilidades como Desarrollador Front-end. La aplicación es una Pokédex interactiva que permite explorar diferentes Pokémon utilizando Vue.js, Vuetify y otras tecnologías modernas.

## Tecnologías utilizadas

- Vue.js: Framework progresivo de JavaScript para construir interfaces de usuario, al no especificar en la prueba la versión de VUe, y aunque manejo muy bien Composition API decidí hacer esta prueba con Options API debido que en mi trabajo actual como full stack he venido trabajando con esta sintaxis y me siento más cómodo pero no es un inpedimento. (Obligatoria por la prueba)
- Vuetify: Framework de Material Design para Vue.js. 
- Vuex: Gestión del estado de la aplicación. (Dependencia para el manejo del estado isLoading y para la persistencia de los datos)
- Vue Router: Enrutamiento de páginas dentro de la aplicación. (Enrutamiento de la SPA)
- Axios: Cliente HTTP para obtener datos de la API de Pokémon. (Peticióndes HTTP)
- ESLint: Herramienta de análisis de código para mantener una calidad consistente del código.
- Babel: Transpilador para usar las últimas características de JavaScript.

## Funcionalidades Requeridas
1. Lista de Pokémon:
- Utilización del endpoint GET https://pokeapi.co/api/v2/pokemon para obtener una lista de Pokémon y mostrarlos en la interfaz.

2. Detalles del Pokémon:
- Utilización el endpoint GET https://pokeapi.co/api/v2/pokemon/${name} para obtener información detallada sobre un Pokémon específico cuando el usuario lo selecciona.

3. Pantalla de Carga:
- Durante la carga de los datos, mostrar un efecto de animación CSS sobre la imagen de la Pokébola, indicando que los datos están siendo cargados.

4. Botón Compartir:
- Un botón que copie al portapapeles el nombre del Pokémon y sus atributos (como estadísticas, habilidades, etc.), separados por comas.

5. Persistencia de Favoritos:
- Los Pokémon seleccionados como favoritos deben ser almacenados de manera persistente en el store de Vue (Vuex), de modo que la lista de favoritos persista incluso después de recargar la página.

## Buenas Prácticas y Principios de Diseño
### KISS (Keep It Simple, Stupid)
El enfoque de la implementación fue mantener las cosas lo más simples posibles, tanto en términos de arquitectura como de funcionalidad. La aplicación no incluye características adicionales que no sean necesarias para cumplir con los requerimientos, además del botón de exit añadido por la Heurística de usabilidad, Libre control de Nielse, asegurando así una base de código clara y manejable.

### DRY (Don’t Repeat Yourself)
Se aplicó el principio DRY asegurando que el código no tenga duplicación innecesaria. Las funciones de obtención de datos de la API y de manejo del estado fueron centralizadas, evitando la repetición de lógica en varios componentes como lo fue durante el desarrollo con el boton que convertí en reutilizable y el manejo de un solo componente para mostar las dos listas.

### SOLID
Aunque la aplicación no es muy compleja, se intentó seguir principios de SOLID, especialmente en la organización de los componentes y la gestión del estado. Esto facilita la extensión del código en el futuro si se requiere añadir nuevas funcionalidades o mejorar la arquitectura.
### Modularidad
Cada parte del proyecto (componentes como: barra de búsqueda, botón de añadir a favoritos, store, la instancia de axios para manejar los interceptores y peticiones a la API, los botones de navegación, el loanging) fue dividida en módulos reutilizables, facilitando el mantenimiento y la escalabilidad del proyecto.
## Conclusión
Este proyecto busca implementar una solución simple, pero eficiente, para mostrar y almacenar los Pokémon favoritos de un usuario. La aplicación se construyó con Vue.js y sigue principios de buenas prácticas de desarrollo como KISS, DRY y SOLID, lo que permite una fácil expansión y mantenimiento. Además, se pensó en cómo manejar la escalabilidad y el rendimiento de la aplicación, asegurando una experiencia fluida incluso si la cantidad de datos aumenta.

### Customize configuration
Esta prueba técnica fue realizada con mucho amor por el participante JUAN FELIPE JIMÉNEZ SALAZAR.



