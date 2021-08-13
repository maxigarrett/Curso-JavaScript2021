export const SerchForm=()=>{
    const DOMform = document.createElement('form');
    DOMform.classList.add('form')
    const DOMinput=document.createElement('input');
    DOMinput.name='search'
    DOMinput.type='search';
    DOMinput.placeholder='bisqueda...';
    DOMform.appendChild(DOMinput);
    return DOMform
}