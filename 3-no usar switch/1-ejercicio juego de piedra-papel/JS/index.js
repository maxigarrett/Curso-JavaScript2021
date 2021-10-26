/*vamos a simular un juego de piedra, papel o tijera lo aremos con switch
y lo remplasaremos por un obj ya que el switch en js no se deberia usar*/
console.log('vinculado')


const MANOS_DE_JUGADORES=['piedra','papel','tijera'];

//esto si el juego contaria conmas opciones seria muy dificil ir escalando por eso existe otras 
//soluciones ya que a JS no le senta nada bien el switch y el break


/*const juego=(jugador1,jugador2)=>{

	if(!MANOS_DE_JUGADORES.includes(jugador1) || !MANOS_DE_JUGADORES.includes(jugador2)) 
		throw new Error('Opcion de juego no valida');
	if(palyer1===player2) return 'empate'
	switch(jugador1){
		case 'piedra':
			if(jugador2==='papel') return 'gana jugador 2';
			else return 'gana jugador 1';
			break;
		case 'papel':
			if(jugador2==='tijera') return 'gana el jugador 2';
			else return 'gano el jugador 1';
			break;
		case 'tijera':
			if(jugador2==='piedra') return 'gana el jugador 2';
			else return 'gana el jugador 1';
			break
	}

}
console.log(juego('tijera','papel'))*/




//FORMA CORRECTA PARA EVITAR USAR SWITCH
const REGLAS_DE_JUEGO={
	//valor del jugador 1
	piedra:{
		//valores del jjugador 2
		papel:true,
		tijera:false
	},
	papel:{
		tijera:true,	
		piedra:false
	},
	tijera:{
		piedra:true,
		papel:false	
	}
}

// console.log(REGLAS_DE_JUEGO['piedra']['tijera'])
const juego=(jugador1,jugador2)=>{

	if(!MANOS_DE_JUGADORES.includes(jugador1) || !MANOS_DE_JUGADORES.includes(jugador2)) 
		throw new Error('Opcion de juego no valida');

		//al poner en el primer [jugador1][] acedemos a la propiedad que coincida con el objetoREGLAS_DE_JUEGO
		//y al poner [][jugador2] accedemos a la propiedad dentro de la propiedad que coincida
		//con la primer propiedad 
		//entonces si las opciones se agrandan solo quedara agregar esas opciones al obj y sera escalable
		//a lo contrario de usar switch
		if(REGLAS_DE_JUEGO[jugador1][jugador2]) return 'gana jugador 2'
		else return 'gana jugador 1'
	
}
console.log(juego('piedra','papel'))
