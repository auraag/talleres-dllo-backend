function convertidorTemp(tempC){
    return tempC*(9/5)+32
}

function resolvedor(a,b,c,opcion){
    if (opcion === "+"){
        x = (-b+(b**2 - 4*a*c)**(1/2))/(2*a)
    }else{
        x = (-b-(b**2 - 4*a*c)**(1/2))/(2*a)
    }
    return x
}

function mejorParidad(num){
    return num%2 === 0
}

function peorParidad(num){
    let detener = false
    let respuesta = false
    while(!detener){
        num -= 2
        if(num === 0){
            detener = true
            respuesta = true
        }else if(num < 0){
            detener = true
            respuesta = false
        }
    }
    return respuesta
}
