export const CountDown=(Id,LimitDate,FinalMessage)=>{
    let timeInterval=0;
    const DomDivCountDown= document.getElementById(Id);
    let contDownDate=new Date(LimitDate).getTime();

    timeInterval= setInterval(()=>{
        let dateNow=new Date().getTime();
        //restamos la fecha de mi cumple menos la fecha actual para saber lo que falta
        let limitTime=contDownDate - dateNow;
        //convertimos a num redondo los dias que faltan dividiendo la resta que hicimos dividido
        //1000(1s) * 60(pasamos a minutos) *60(pasamos a hs) *24 (pasamos a dias)
        let days=Math.floor(limitTime / (1000 * 60 * 60 * 24));
        let hs=Math.floor(limitTime % (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
        let minutes=Math.floor(limitTime % (1000 * 60 * 60)/(1000 * 60 ));
        let second=Math.floor(limitTime % (1000 * 60)/(1000))
        DomDivCountDown.innerHTML=`te faltan ${days} dias ${hs} Horas ${minutes} minutos ${second} segundos`;

        if(limitTime <= 0){
            clearInterval(timeInterval);
            DomDivCountDown.innerHTML='Feliz cumpleaños';
        }
    },1000)
}