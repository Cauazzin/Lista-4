var compra = Number(prompt("Digite o valor da compra"))

var valorFinal

if(compra > 100){
    valorFinal = compra - (compra * 0.10)
    alert("Voce recebeu 10% de desconto e o valor final da compra é: " + valorFinal.toFixed(2));
}else{
    valorFinal = compra
    alert("Sem desconto. O valor final da compra é: " + valorFinal.toFixed(2));
}


