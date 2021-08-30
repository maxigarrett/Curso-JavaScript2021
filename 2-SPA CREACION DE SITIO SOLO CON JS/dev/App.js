import { Header } from './component/Header.js'
import { Loader } from './component/Loader.js'
import { SectionCard } from './component/SectionCard.js'
import { Router } from './component/Router.js'

export const App=()=>{
    const DOMRoot=document.getElementById('root')//div que esta en index.html donde pondremos toda la data

    // evitamos que cuando cliquemos en los enlaces del header como es todo dinamico se renderice
    //y duplique contantemente el header por eso borramos sus hijos del root y evitamos esos duplicados
    while(DOMRoot.firstChild){ DOMRoot.firstChild.remove()}
    
    DOMRoot.appendChild(Header())
    DOMRoot.appendChild(SectionCard())
    DOMRoot.appendChild(Loader())
    
    //el router no va dentro de el div root llamado DOMRoot ya que es mas como la logica de progrmacion
    //lo que tendria que ejecutarse por eso solo la invocamos esta va a manejar las Rutas 
    //a traves del HASH que lo detecta en el index.js mediate un addeventilistener
    Router();
}