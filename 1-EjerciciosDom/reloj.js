export const DigitalClock =(reloj,btnPlay,btnStop)=>{
    // console.log(document.querySelector(btnPlay))
    let interval;
    document.addEventListener('click',(e)=>{
        if(e.target.matches(btnPlay)){
            interval=  setInterval(()=>{
                let clockHs=new Date().toLocaleTimeString();
                document.querySelector(reloj).textContent=clockHs
            },1000)
            e.target.disabled=true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(interval);
            document.querySelector(reloj).textContent='';
            document.querySelector(btnPlay).disabled=false;
        }
    })
}
export const Alarm=()=>{}