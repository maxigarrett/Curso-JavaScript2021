import {App} from './App.js';
document.addEventListener('DOMContentLoaded',App)

//evento que nos permite detectar el cambio del hash de la url
//App tiene una funcion que hace de componente llamada Router donde vamos a gestionar las rutas
window.addEventListener('hashchange',App)