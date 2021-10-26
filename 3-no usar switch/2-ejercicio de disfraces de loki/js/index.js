// const ADVERSARIOS=['hulk','logan','cap-america','spider-man']


const disfrasesLoki=(ADVERSARIOS)=>{

    switch (ADVERSARIOS) {
        case 'hulk':
            return loki='iron-man'
            break;
        case 'logan':
            return loki='magneto'
            break;
        case 'cap-america':
            return loki='alcon'
            break;
        case 'spider-man':
            return loki='rino'
            break;
    
        default:
            return loki
            break;
    }
}

// console.log(disfrasesLoki('hulk'));


// REMPLAZAMOS SWITCH 
const DEFAULT_LOKI='hulk'

const adversario='logan'

const ADVERSARIOS={
    hulk:{
        loki:'iron-man'
    },
    logan:{
        loki:'magneto'
    },
    "cap-america":{
        loki:'alcon'
    },
    "spider-man":'rino'//de esta forma es mejor que crear una propiedad loki
    
}


let lokiDisfraces= ADVERSARIOS[adversario] || DEFAULT_LOKI;
const {loki}=lokiDisfraces
console.log(loki);