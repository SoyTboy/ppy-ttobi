function calcularPrimerosDiez(pesoIngresado) {
    return pesoIngresado * 100
    
}

function calcularEntreOnceYVeinte(pesoIngresado) {
    let resultado = calcularPrimerosDiez(10)
    let resto = pesoIngresado  - 10
    let calcResto = 50 * resto
    let suma = resultado + calcResto
    return suma
}

function calcularMayorAVeinte(pesoIngresado) {

    let resultadoDos = calcularEntreOnceYVeinte(20)
    let restoCalc = pesoIngresado - 20
    let calcRestoTres = 20 * restoCalc
    let sumaDos = resultadoDos+calcRestoTres
    return sumaDos
}

function holliday(pesoIngresado) {
    if (pesoIngresado <= 10) {

        let resultado = calcularPrimerosDiez(pesoIngresado)
        console.log(resultado)

    }else if(pesoIngresado > 10 && pesoIngresado <= 20){

        let apartado = calcularEntreOnceYVeinte(pesoIngresado)
        console.log(apartado)

    }else {

        let mayor = calcularMayorAVeinte(pesoIngresado)
        console.log(mayor)
    }
}


holliday(29)

superficie(35)

function superficie(pesoIngresado) {
    let resultadoSuperficie = ((pesoIngresado * 4) + 7) / (pesoIngresado + 90)
    console.log(resultadoSuperficie)
}