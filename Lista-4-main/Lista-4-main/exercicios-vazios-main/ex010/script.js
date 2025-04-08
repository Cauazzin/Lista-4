var velocidade = Number(prompt("Digite a velocidade em km/h:"))

var tempo = Number(prompt("Digite o tempo da viagem em horas:"))

let distancia = velocidade * tempo

alert("Distância percorrida: " + distancia.toFixed(2) + " km")