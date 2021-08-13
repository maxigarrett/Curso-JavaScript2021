export const Loader =() =>{
    const ELImage=document.createElement('IMG');
    ELImage.src='./asset/Spinner.gif';
    ELImage.alt='Cargando...';
    ELImage.classList.add('loader')

    return ELImage
}