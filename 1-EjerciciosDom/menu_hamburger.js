export const hamburguerMneu=(btnPanel,clasPanel,menuLink)=>{
    document.addEventListener('click',(e)=>{

        if(typeof e.target.matches(btnPanel) === 'boolean'){
            //en ves de utilizar contain que daria error porque le estmos pasando clases con un punto osea .class , para q no de error
            //utilizamos la funcion matches() que comprueba si al hacer clic contiene la clase css el elemento con su punto igual a css 
            // `${btnPanel} *` apra decir que aplique a todos sus hijos
            if(e.target.matches(btnPanel) || e.target.matches(`${btnPanel} *`)){
                document.querySelector(clasPanel).classList.toggle('panel-active')
                document.querySelector(btnPanel).classList.toggle('is-active')
            }
    
            if(e.target.matches(menuLink)){
                //clic en los enlaces de navegacion remueve el menu y boton a estado original
                document.querySelector(clasPanel).classList.remove('panel-active')
                document.querySelector(btnPanel).classList.remove('is-active')
            }
        }
    })
}