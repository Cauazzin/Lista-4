let idade = Number(prompt("Digite sua idade:"));

let ingresso = ""

if (idade < 12) {
  ingresso = "Infantil"
} else if (idade >= 12 && idade <= 17) {
  ingresso = "Adolescente"
} else if (idade >= 18 && idade <= 64) {
  ingresso = "Adulto"
} else {
  ingresso = "Sênior"
} 

alert("Tipo de ingresso: " + ingresso);