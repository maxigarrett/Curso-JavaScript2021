import { hamburguerMneu } from "./menu_hamburger.js";
import { DigitalClock,Alarm } from "./reloj.js";

document.addEventListener('DOMContentLoaded',()=>{
    hamburguerMneu('.panel-btn','.panel','.panel__menu a');
    //function reloj
    DigitalClock('#reloj','#activar-reloj','#dasctivar-reloj');
})
