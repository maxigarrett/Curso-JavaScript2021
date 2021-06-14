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
export const Alarm=(alarm,btnStar,btnStop)=>{
    let intervalAlarm;
    const audio=document.createElement('audio')
    audio.src=alarm
    document.addEventListener('click',(e)=>{
        if(e.target.matches(btnStar)){
          intervalAlarm=  setInterval(()=>{
                audio.play();
            },1000)
        }
        if(e.target.matches(btnStop)){
            clearInterval(intervalAlarm)
            audio.currentTime=0
            audio.pause();
        }
    })
}