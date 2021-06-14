let x=0;
let y=0;
export const ShortCut=(e)=>{
    //se puede obtener la tecla por un codigo que le corresponde a cada tecla o por tecla
    console.log(e.key)
    console.log(e.keyCode)

    //se pude capturar para hacer atajos de teclado o shorcut el crt shift o alt
    console.log(e.ctrlKey)//si se preciona devulve tru o false si no se preciono
    console.log(e.shiftKey)
    console.log(e.altKey)

    if(e.key==='a' && e.altKey) alert('shortcut ALERT activado')
    if(e.key==='p' && e.altKey) prompt('shortcut PROPT activado')
    if(e.key==='c' && e.altKey) confirm('shortcut CONFIRM activado')
}

export const MoveBall=(e,stage,ball)=>{
    const DomEstage=document.querySelector(stage);
    const DomBall=document.querySelector(ball);
    //detectar colisiones entre elementos 
    let limitBall=DomBall.getBoundingClientRect()
    let limitStage=DomEstage.getBoundingClientRect()
    console.log(limitBall,limitStage)

    switch(e.key){
        case 'ArrowUp':
           y=y-1
            //caundo llegue al limite cada ves que aumente para mover al llegar al limite le restara 1
            //entonces se quedara quieta y se podra desplazar por la pagina web
            if(limitBall.top < limitStage.top){
                y++;
            }else {
                //simpre se ejecutara el else mientras no llegue al limite la bola dentro del div stage
                //osea no dejara que se desplace la pag web con las flechas y solo se mueva la bola
                e.preventDefault();
            } 
            break;
        case 'ArrowDown':
            y++
            if(limitBall.bottom > limitStage.bottom)y--
            else e.preventDefault();
            break;
        case 'ArrowRight':
            e.preventDefault()
            x++
            if(limitBall.right > limitStage.right)x--;
            break; 
        case 'ArrowLeft':
            e.preventDefault()
            x--
            //a medida que se acerca al limite del body el left se va llegando a 0. entoces si la bola
            //tiene el left mas chico que el de su contenedor le sumamos x para que se quede donde esta
            //y no se salga del contenedor
            if(limitBall.left < limitStage.left)x++;
            break;   
    }
    //lo multiplicamos para que se mueva mas rapido
    DomBall.style.transform= `translate(${x*10}px ,${y*10}px)`;
}