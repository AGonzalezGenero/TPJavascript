let numero = window.prompt("Ingrese un número y le diré si es Par");

function esPar(numero){
    if(numero%2==0){
        var Boolean = true;
        return "El numero "+numero+" es par: "+Boolean;
    }
    else{
        var Boolean = false;
        return "El numero "+numero+" es par: "+Boolean;
    }
}

alert(esPar(numero));