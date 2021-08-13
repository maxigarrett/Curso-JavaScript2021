export const useFetch=async(props)=>{
    let {url,cbSucces}=props;

    const CONTROLLER=new AbortController();

    setTimeout(()=> CONTROLLER.abort(),5000)
    await fetch(url)
    .then(res=>res.ok?res.json(): Promise.reject(res))
    .then(data=> cbSucces(data))
    .catch(err=>{
        let message=err.statusText || 'Ocurrio un error al acceso de la api'
        document.getElementById('root').innerHTML=`
        <div class="error">
            Error ${err.status}- ${message}
        </div>`

        console.log(err)
    })


}