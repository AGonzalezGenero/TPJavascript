let temperatura = window.prompt("Ingrese una temperatura en grados Celsius (°C)");

function convertirCelsiusAFahrenheit(temperatura){
    let Fahrenheit=(temperatura*1.8)+32;
    return "La temperatura es: "+Fahrenheit+" °F";
}

alert(temperatura+" °C");
alert(convertirCelsiusAFahrenheit(temperatura));