//Object.keys() recoore un obj y muestra la clave y no su valor osea nombre,apellido,edad se ultiliza
                // el mayor de los casos Object.keys(obj).length para saber la longitud del mismo y nada mas 
                //el 5 como clave me lo podra como string y no como numero como lo pusimos aqui y el problema 
                // es el orden ya que lo sube arriba del todo
                //lo pasa a array para poder utilizar los metodos de los arrayz
const persona1={
    nombre:'maxi',
    apellido:'garrett',
    edad:30,
    5:15
}
console.log(Object.keys(persona1).length) //devuelve 4


// --------------------------------Object.values()------------------------------------------------------------
//  devuelve el valor de cada clave del objeto es decir, maxi,garrett,30 
//aca muestra lo que es string es strin y lo que es numero es numero y boleao es boleano
const salarios={
    enero:920,
    febrero:1040,
    marzo:1210,
}
// se utiliza por ejemplo para agarrar los valores y sumarlos si son numeros
//el resultado lo muestra dentro de un array por lo que podemos utilizar los metodos de los arrays y utilisamos el reduce y sumamos los valores
console.log('object.values con reduce suma de salarios:  '+Object.values(salarios).reduce((acum,currentValue)=>acum+currentValue,0)) 



// --------------------------------Object.entries()------------------------------------------------------------
// este nos devuelve un array de arrays es decir un array y que en cada posicion es un arraya y lo que obtienen es, en la posicion 
// [0] la clave y la posicion [1]el valor
//se podra utilizar si por ejemplo queremos modificarl el obj en funcion del valor que trae por ejemplo queremos poner en mayusculas
//el valor de los string
console.log('')
console.log('')
console.log('-----------object.entries--------------------')
const persona2={
    nombre:'maxi',
    apellido:'garrett',
    edad:30,
}
Object.entries(persona2).forEach(par=>{
    // console.log(par)
    // console.log(par[1])//obtenemos el valor osea maxi,garrett y 30
    const clave=par[0]
    const valor=par[1]
    if(typeof valor === 'string'){
        persona2[clave]= valor.toUpperCase()
    }
});
console.log('object.entries con foreach paso a mayusculas ')
console.log(persona2)





//---------------------------------Object.fromEntries------------------------
// hace lo contrario de Object.entries osea le pasas un arrays de arrays y lo combierte a objeto
//muy poco utilizado o rara ves se utiliza
const persona3=[
    ['nombre','maxi'],
    ['apellido','garrett'],
    ['edad',30]
]
console.log('')
console.log('-----------object.fromEntries--------------------')
console.log(Object.fromEntries(persona3))




//---------------------------------Object.assign------------------------
// hace una clonacion de un objeto recibe dos parametros objeto donde se va a compiar y el objeto en si.
// el problema que existe es que hace la copia y si dentro de ese obj hay otro objeto como en este caso 'direccion'  
//no solo cambiara el objeto original si no que tambien la copia porque no lo hace por valor sino por referencia a ese obj. por eso 
//sirve solo para el primer nivel con datos de tipo primitivos osea objetos sencillos sin subniveles
//para soluciona esto abria que hacer json.parse() y json.strngyfie()
const persona4={
    nombre:'maxi',
    apellido:'garrett',
    direccion:{
        calle:'calle falsa 123',
        ciudad:'buenos aires',
        facturacion:{
            calle:'calle mendoza'
        }
    }
}
console.log('')
console.log('-----------object.fromEntries--------------------')

const objetoClonado={}
Object.assign(objetoClonado,persona4)
console.log(objetoClonado)




