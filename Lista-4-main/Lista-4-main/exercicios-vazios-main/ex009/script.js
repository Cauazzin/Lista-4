var fahrenheit = Number(prompt("Digite a temperatura em graus Fahrenheit:"))

var celsius = (fahrenheit - 32) * 5 / 9

alert(fahrenheit + "°F equivalem a " + celsius.toFixed(2) + "°C")