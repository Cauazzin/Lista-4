var macas = Number(prompt("Quantas maçãs irá comprar"))
var preco

if(macas >=12) {
    preco = 1.00
}else{
    preco = 1.30
}

var custoTotal = macas * preco
alert("O custo total da compra é R$" + custoTotal.toFixed(2))