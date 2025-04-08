var numero1 = Number(prompt("Digite um número"))
var numero2 = Number(prompt("Digite um número"))
var numero3 = Number(prompt("Digite um número"))

var numeros

if(numero1 > numero2 && numero1 > numero3){
    numeros = numero1
}else if(numero2 > numero1 && numero2 > numero3){
    numeros = numero2
}else{
    numeros = numero3
}

alert("O maior número é: " + numeros)