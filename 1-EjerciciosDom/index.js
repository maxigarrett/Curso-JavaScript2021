import { CountDown } from "./cuentaRegresiva.js";
import { MoveBall, ShortCut } from "./eventosTecaldo.js";
import { hamburguerMneu } from "./menu_hamburger.js";
import { DigitalClock,Alarm } from "./reloj.js";

document.addEventListener('DOMContentLoaded',()=>{
    hamburguerMneu('.panel-btn','.panel','.panel__menu a');
    //function reloj
    DigitalClock('#reloj','#activar-reloj','#dasctivar-reloj');
    Alarm('./asset/sounds/alarma-good-4-morning.mp3','#activar-alarma','#desactivar-alarma');

    CountDown('countDow','Oct 25, 2021 00:0:01','Feleiz Cumple Maxi ')
})


document.addEventListener('keydown',(e)=>{
    ShortCut(e)
    MoveBall(e,'.stage','.ball')
})