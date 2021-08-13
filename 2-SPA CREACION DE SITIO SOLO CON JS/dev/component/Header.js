import api from "../helper/wp_api.js";
import { Menu } from "./Menu.js";
import { Title } from "./Title.js";
import { SerchForm } from './SerchForm.js'

export const Header=()=>{
    const ELHeader=document.createElement('header');
    ELHeader.classList.add('header')
    ELHeader.appendChild(Title(api.NAME))
    ELHeader.appendChild(Menu())
    ELHeader.appendChild(SerchForm())
    return ELHeader
}