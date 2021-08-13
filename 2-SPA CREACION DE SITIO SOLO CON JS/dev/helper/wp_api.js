// toda pagina publica echa en wordpress se puede acceder a los datos json a traves de wp-json
const NAME='css-tricks';
const DOMAIN=`https://${NAME}.com`;//sin www para que ande porque es en wordpress
const SITE=`${DOMAIN}/wp-json`;//nos muestra en formato json la pagina de worpress
const API_WORDPRESS=`${SITE}/wp/v2`//toda la informacion de la wordpress api, toda la info del sitio
const POSTS= `${API_WORDPRESS}/posts?_embed`;//embebe la info del sitio para extraer osea lo que ve el usuario
const POST=`${API_WORDPRESS}/posts`;//permite obtener la info de un post en particular
const CATEGORIES= `${API_WORDPRESS}/categories`;
//para buscar en search=(lo que escribamos en el input buscador)
const SEARCH=`${API_WORDPRESS}/search?_embed&search=`;

//a la hs de llamar este archivo lo podremos almacenar en una variable llamada de cualquier forma simpre
//y cuando lo exportemos por defecto
export default{
    NAME,DOMAIN,SITE,API_WORDPRESS,POSTS,POST,CATEGORIES,SEARCH
}

