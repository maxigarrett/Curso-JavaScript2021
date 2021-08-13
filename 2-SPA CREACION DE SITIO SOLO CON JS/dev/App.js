import api from './helper/wp_api.js'
import { useFetch } from './helper/useFetch.js'
import { Header } from './component/Header.js'
import { Loader } from './component/Loader.js'
import { SectionCard } from './component/SectionCard.js'
import { Card } from './component/Card.js'

export const App=()=>{
    //  podemos hacer todos los fetch que querramos consultando los end point de wp_api.js
   /* let optionsCategories={
        url:api.CATEGORI,
        cbSucces:(categories)=>console.log(categories)
    }
    useFetch(optionsCategories)*/
    

    const DOMRoot=document.getElementById('root')//div que esta en index.html donde pondremos toda la data
    DOMRoot.appendChild(Header())
    DOMRoot.appendChild(SectionCard())
    DOMRoot.appendChild(Loader())

    useFetch({
        url:api.POSTS,
        cbSucces:(posts)=>{
            console.log(posts)
            posts.forEach(el=>{
                // console.log(el)
                //cada vuelta de bucle por los registros que traiga se agregara un hijo al sectionCard
                document.getElementById('sectionCard').appendChild(Card(el))
            })
            //ocultamos el Loader
            document.querySelector('.loader').remove();

        }
    })
}