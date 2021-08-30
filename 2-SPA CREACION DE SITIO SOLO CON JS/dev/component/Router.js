import api from '../helper/wp_api.js'
import { useFetch } from '../helper/useFetch.js'
import { Card } from './Card.js'

export const Router=async()=>{

    let{hash}=location
    console.log(hash)
    //eliminamos duplicado
    while(document.getElementById('sectionCard').firstChild)
    {document.getElementById('sectionCard').firstChild.remove()}


    if(hash==='#/'||!hash){
       await useFetch({
             url:api.POSTS,
             cbSucces:(posts)=>{
                 console.log(posts)
                 posts.forEach(el=>{
                     //  console.log(el)
                     //cada vuelta de bucle por los registros que traiga se agregara un hijo al sectionCard
                     document.getElementById('sectionCard').appendChild(Card(el))
                 })   
             }
         })
    }
    else if(hash==='#/search'){
        document.getElementById('sectionCard').textContent='secsion del search'
    }
    else if(hash==='#/contact'){
        document.getElementById('sectionCard').textContent='secsion del contact'
    }
    else{
        
        document.getElementById('sectionCard').textContent='carga contenido del post previamente seleccionado'
    }
    //ocultamos el Loader pero si no le ponemos un setTimeOut directamente ni parece el loader
    //porque lo saca al intante por eso le decimos que espere 1s antes de remover
    setTimeout(()=>document.querySelector('.loader').remove(),500)
}