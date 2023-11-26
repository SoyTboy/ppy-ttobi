let pesoIngresado
let peso = 25

if (peso < 30){
    holliday(peso);
}else{
    superficie (peso);
}

function holliday(pesoIngresado) {
    if(pesoIngresado < 20){
        let resultado1=pesoIngresado - 20
        let resultado2=resultado1 * 20
        console.log(resultado2)
    }else if(peso <= 20 && peso > 10){
        let resultado1=peso - 10
        let resultado2=resultado1 * 50
        let resultado3=resultado2 + 1000
        console.log(resultado3)
    }
}