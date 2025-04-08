var macas = Number(prompt("Quantas maçãs irá comprar"))
var preco = 1.30

if(macas >=12) {
    preco = 1.00
}

var custoTotal = macas * preco
alert("O custo total da compra é R$" + custoTotal.toFixed(2))