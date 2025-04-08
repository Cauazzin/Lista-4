var idade = Number(prompt("Digite sua idade"))
var mensagem = ""

if(idade >=18 && idade <=70) {
    mensagem = "O Voto é obrigatótrio"
}else{
    mensagem = "O voto não obrigatório"
}

alert(mensagem)