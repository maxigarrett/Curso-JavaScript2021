export const Card=(props)=>{
    let {title,date,slug,_embedded}=props;
    let newDateFormat= new Date(date).toLocaleString();
    
    //sino viene imagen de la api ponemos el loader
    let urlPoster= _embedded['wp:featuredmedia']?_embedded['wp:featuredmedia'][0].source_url: './asset/Spinner.gif'
    

    const DOMarticleCard=document.createElement('article');
    DOMarticleCard.classList.add('article-card')
    const DOMarticleImage=document.createElement('img')
    DOMarticleImage.src=`${urlPoster}`;
    DOMarticleImage.alt=`${title.rendered}`

    const DOMarticleTitle=document.createElement('h2');
    DOMarticleTitle.textContent=`${title.rendered}`;

    // -----------------------------------------
    const DOMarticleParagraph=document.createElement('p');

    const DOMarticleTime=document.createElement('time');
    DOMarticleTime.dateTime=`${date}`
    DOMarticleTime.textContent=`${newDateFormat}`

    const DOMarticleLink=document.createElement('a');
    DOMarticleLink.href=`#/${slug}`
    DOMarticleLink.textContent=`Ver Publicacion`

    //agregamos LINK Y TIME dentro del parrafo
    DOMarticleParagraph.appendChild(DOMarticleTime)
    DOMarticleParagraph.appendChild(DOMarticleLink)
    // --------------------------------------------------


    //agregamos todo al article
    DOMarticleCard.appendChild(DOMarticleImage)
    DOMarticleCard.appendChild(DOMarticleTitle)
    DOMarticleCard.appendChild(DOMarticleParagraph)

    return DOMarticleCard
}