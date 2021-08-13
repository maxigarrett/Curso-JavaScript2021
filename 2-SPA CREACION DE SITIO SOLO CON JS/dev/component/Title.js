export const Title=(nameTitle)=>{
    const ELH1= document.createElement('H1');
    ELH1.classList.add('header__title')
    ELH1.textContent=nameTitle
    return ELH1
}