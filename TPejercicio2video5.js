let libro = new Object()

libro.titulo = 'Don Quijote de La Mancha'
libro.autor = 'Miguel de Cervantes'
libro.año = '1605'

console.log(libro)

function antiguedad(año){
    if(2024-año>10){
        var Boolean = true
        return "El libro "+libro.titulo+" es antiguo: "+Boolean;
    }
    else{
        var Boolean = false
        return "El libro "+libro.titulo+" es antiguo: "+Boolean;
    }
}

console.log(antiguedad(libro.año))