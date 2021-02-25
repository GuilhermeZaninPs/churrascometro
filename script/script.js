// CarneHomem = 400g ----- Depois de 6h 600g
// CarneMulher = 300g ----- Depois de 6h 500g
// CarneCriança = 200g ----- Depois de 6h 400g

// BebidaHomem = 1200ml ----- Depois de 6h 2000ml
// BebidaMulher = 1000ml ----- Depois de 6h 1800ml
// BebidaCriança = 600ml ----- Depois de 6h 1200ml

let carneTotalHomem = document.getElementById("homem");
let carneTotalMulher = document.getElementById("mulher");
let carneTotalCrianca = document.getElementById("crianca");
let totalDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

// Carne para Homens
function carnePH(duracao){
    if(duracao >= 6){
        return 600
    } else{
        return 400
    }
}

// Carne para Mulheres
function carnePM(duracao){
    if(duracao >= 6){
        return 500
    } else{
        return 300
    }
}

// Carne para Crianças
function carnePC(duracao){
    if(duracao >= 6){
        return 400
    } else{
        return 200
    }
}

// Bebida para Homens
function bebidaPH(duracao){
    if(duracao >= 6){
        return 2000
    } else{
        return 1200
    }
}

// Bebida para Mulheres
function bebidaPM(duracao){
    if(duracao >= 6){
        return 1800
    } else{
        return 1000
    }
}

// Bebida para Crianças
function bebidaPC(duracao){
    if(duracao >= 6){
        return 1200
    } else{
        return 600
    }
}


//Calcular
function calcular(){
    let homens = carneTotalHomem.value
    let mulheres = carneTotalMulher.value
    let crianca = carneTotalCrianca.value
    let duracao = totalDuracao.value

    let totalCarne = homens * carnePH(duracao) + mulheres * carnePM(duracao) + crianca * carnePC(duracao)
    let totalBebida = homens * bebidaPH(duracao) + mulheres * bebidaPM(duracao) + crianca * bebidaPC(duracao)
    
    resultado.innerHTML = `<h1>Você precisará de: </h1>`
    resultado.innerHTML += `<p>${(totalCarne / 1000)}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalBebida / 1000)}L de Bebida</p>`
    
}