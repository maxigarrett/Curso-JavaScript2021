export const Menu=()=>{ 
    const DOMNav=document.createElement('nav');
    DOMNav.classList.add('menu');

    //item internos del nav
    //link home
    const DOMLinkHome=document.createElement('a')
    DOMLinkHome.textContent='Home'
    DOMLinkHome.href='#/';
    
    //span
    const DOMSpanSeparator1=document.createElement('span');
    DOMSpanSeparator1.textContent='-'

    //link search
    const DOMLinkSearch=document.createElement('a');
    DOMLinkSearch.textContent='Busqueda';
    DOMLinkSearch.href='#/search';

    //span
    const DOMSpanSeparator2=document.createElement('span');
    DOMSpanSeparator2.textContent='-'

    //link Contacto
    const DOMLinkContact=document.createElement('a');
    DOMLinkContact.textContent='Contacto';
    DOMLinkContact.href='#/contact';

    //span
    const DOMSpanSeparator3=document.createElement('span');
    DOMSpanSeparator3.textContent='-'

    // link a pag js
    const DOMLinkJS=document.createElement('a');
    DOMLinkJS.textContent='Aprende js';
    DOMLinkJS.href='https://aprendejavascript.org';
    DOMLinkJS.target='_blank';
    DOMLinkJS.rel='noopener';

    //agregamos los items al nav
    DOMNav.appendChild(DOMLinkHome)
    DOMNav.appendChild(DOMSpanSeparator1)
    DOMNav.appendChild(DOMLinkSearch)
    DOMNav.appendChild(DOMSpanSeparator2)
    DOMNav.appendChild(DOMLinkContact)
    DOMNav.appendChild(DOMSpanSeparator3)
    DOMNav.appendChild(DOMLinkJS)
    return DOMNav
}