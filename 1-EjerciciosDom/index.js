import { MoveBall, ShortCut } from "./eventosTecaldo.js";
import { hamburguerMneu } from "./menu_hamburger.js";
import { DigitalClock,Alarm } from "./reloj.js";

document.addEventListener('DOMContentLoaded',()=>{
    hamburguerMneu('.panel-btn','.panel','.panel__menu a');
    //function reloj
    DigitalClock('#reloj','#activar-reloj','#dasctivar-reloj');
    Alarm('./asset/sounds/alarma-good-4-morning.mp3','#activar-alarma','#desactivar-alarma')
})


document.addEventListener('keydown',(e)=>{
    ShortCut(e)
    MoveBall(e,'.stage','.ball')
})
