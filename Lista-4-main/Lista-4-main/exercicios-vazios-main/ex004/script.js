var temperatura = Number(prompt("Digite a temperatura em ºC:"))
if(temperatura <0) {
    alert = ("Muito frio")
}else if(temperatura >=0 && temperatura <=20){
    alert("Frio")
}else if (temperatura >=21 && temperatura <=30){
    alert("Agradável")
}else{
    alert("Calor")
}

