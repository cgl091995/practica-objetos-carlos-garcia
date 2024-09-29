//ejercicio 1.Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.
/*
iniciar
    leer array
    sumar elementos
fin


*/

const num=[5, 6, 7, 8, 9, 10]

function sumar(){
    const resultado=num.reduce(function(acumulador, item)
    {return acumulador + item}, 0)
    console.log(resultado)
}

sumar() 


//ejercicio 2. Crea un objeto que represente un producto con las propiedades nombre, precio, y disponible (un booleano). Escribe una función que imprima la información del producto solo si está disponible.
/*
inicio
    leer objeto
    si disponible mostrar informacion objeto
    fin si
fin
*/
const objeto={
    nombre: 'pelota',
    precio: '5€',
    disponible: true
}
function imprimirSiTrue(){
    if(disponible=true){
        console.log('el objeto esta disponible')}
        else{console.log('el bojeto no esta disponible')}
}
imprimirSiTrue()




//Ejercicio 3. Crea un array de objetos que representen libros, cada uno con las propiedades titulo, autor, y anio. Escribe una función que reciba el array y devuelva solo los libros publicados después del año 2000.
/*
inicio
    leer array
    si libro publicado > 2000 imprimir
    sino no imprimir
    fin si
fin


*/

    libro1={
    titulo: 'mar',
    autor: 'miguel',
    anio: 1985
    }


    libro2={
    titulo: 'tierra',
    autor: 'nacho',
    anio:2002
}


    libro3={

    titulo: 'fuego',
    autor:'elias',
    anio:2024
 }

const array=[libro1, libro2, libro3]

function devolverAfter2000(){                   
 array.forEach((item)=>{if(item.anio > 2000)
    console.log(item)})
}
    devolverAfter2000()



//ejercicio 4.Crea un array de objetos que representen productos, con propiedades nombre, precio, y categoria. Escribe una función que devuelva todos los productos de una categoría específica.

/* 
inicio
    leer array, varios objetos
    si categoria = entonces return objetos
    fin si
fin
*/

obj1={
    nombre: 'carlos',
    precio: '0€',
    categoria: 'humano'
}
obj2={
    nombre:'arkan',
    precio:'2000€',
    categoria: 'perro'
}
obj3={
    nombre: 'lilo',
    precio:'1000€',
    categoria: 'perro'
}

const array2=[obj1, obj2, obj3]

function mismaCategoria(){
    array2.forEach((item)=>{if(item.categoria == 'perro')
        console.log(item)})


}
mismaCategoria()


/*ejercicio 5 – Hacer un programa que:

Solicite al usuario el ingreso por teclado de 3 notas.
Saque la media de las notas.
Muestre por pantalla
-si la nota es menor que 5 'SUSPENSO'
-si la nota es mayor o igual 5 y menor que 7 'APROBADO'
-si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'
*/

/*
iniciar
    solicitar notas
    leer notas
    sacar media notas
    si nota<5 mostrar 'suspenso'
    sino nota>=5 y nota<7 mostrar 'aprobado'
    sino si nota>=7 y nota<=10 mostrar 'sobresaliente'
    fin si
fin
*/

function ingresarNotasyMedia(){
  let nota1=parseFloat (prompt('escriba su nota1'))  
  let nota2=parseFloat (prompt('escriba su nota2'))
  let nota3=parseFloat (prompt('escriba su nota3'))

    const resultado= (nota1 + nota2 + nota3) / 3
    console.log(resultado)
    if(resultado < 5){
        console.log('SUSPENSO')
    }
    else if(resultado <= 5 && resultado < 7){
        console.log('APROBADO')
    }
    else{
        console.log('SOBRESALIENTE')}
    
}

ingresarNotasyMedia()

/*ejercicio 6.
Hacer un programa que:

ingreso de un numero por teclado
Muestre por pantalla si ese numero es de 1 cifra 2 cifras o 3 cifras.
*/

/*
iniciar
    solicitar numero
    leer numero
    si numero 1 cifra mostrar 'numero 1 cifra'
    sino numero 2 cifras mostrar 'numero 2 cifras'
    sino si numero 3 cifras mostrar 'numero 3 cifras'
    fin si
fin
*/


function escribirNumero(){

    const numero=(prompt('Escribir numero'))

    const result= numero.length

    if(result === 1){
        console.log('numero 1 cifra')
    }
    else if(result === 2){
        console.log('numero 2 cifras')
    }
    else{
        console.log('numero 3 cifras')
    }

}
escribirNumero()


/*ejercicio7.Solicite al usuario que escriba un color. Si ese color existe que lo traduzca al inglés, sino que muestre un mensaje de error.*/

/*
iniciar
    solicitar color
    leer color
    si color existe traducir a ingles
    sino mostrar mensaje de error
    fin si
fin
*/

function solicitarColor(){

const colores={
    rojo:'red',
    azul:'blue',
    verde:'green'
}



const exist=(prompt('solicitar color'))

if(colores[exist]){
    console.log(`El color ingresado es ${exist} en ingles es: ${colores[exist]}`)}
else {
    console.log('mensaje error: color no existe')
}

}
solicitarColor()


/*ejercicio 8. se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:

Cuantos son positivos.
Cuantos son negativos.
Cuantos son pares.
*/

/*
iniciar
    solicitar 10 números
    leer 10 números
    si numeros <0 mostrar numeros negativos
    sino numeros >0 mostrar numeros positivos
    fin si
    mostrar numeros pares
fin
*/

function cuantosNumeros(){
    let positivos = 0
    let negativos = 0

    for (let i = 0; i < 10; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`))}
    
        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
        }
        console.log(`Cantidad de números positivos: ${positivos}`);
        console.log(`Cantidad de números negativos: ${negativos}`);
    
}
cuantosNumeros()


/*ejercicio 9. Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.

Almacenar todos los números en un array.
Almacenar en otro array los números comprendidos entre el 1 y 250.
Almacenar en otro array los números comprendidos entre el 251 y 500.
*/
/*
inicio
    solicitar 10 numeros entre 1 y 500
    leer array
    almacenar todos los numeros en un array
    si numero entre 1 y 250 almanacenar en otro array
    sino numero entre 251 y 500 almacenar en otro array
    fin si
fin
*/

function almacenarN(){

    const numeros= [30, 150, 200, 240, 250, 260, 350, 410, 460, 490]
    
    let newArray=[]
    let newArray2=[]

    numeros.forEach(function(num){
    if(num >= 1 && num <=250){
    newArray.push(num)}
    else if(num > 250 && num <= 500){
    newArray2.push(num)}
    })  
    return {newArray, newArray2}  //se retorna un objeto con dos arrays
}
const resultado=almacenarN() //se utiliza variable para almacenar resultado de la función

console.log(resultado.newArray) //resultado es propiedad del array creado por la función
console.log(resultado.newArray2)



/*ejercicio 10. Se solicitan el nombre y 2 notas de x alumnos se almacenan en un array de objetos.

sacar la media de cada alumno y almacenarlo en el objeto del alumno correspondiente.
devolver que alumno ha sacado la mejor media y la nota media.
*/

/*
iniciar
solicitar nombre x alumnos
solicitar 2 notas de x alumnos
sacar media de cada alumno
si alumno mejor media imprimir
fin si
imprimir nota media de alumnos
fin
*/


function laMedia() {
    let alumnos = []
    let numAlumnos = parseInt(prompt("¿Cuántos alumnos deseas ingresar?"))

    for (let i = 0; i < numAlumnos; i++) {
        let nombre = prompt(`Ingrese el nombre del alumno ${i + 1}:`)
        let nota1 = parseFloat(prompt(`Ingrese la primera nota de ${nombre}:`))
        let nota2 = parseFloat(prompt(`Ingrese la segunda nota de ${nombre}:`))
        
        alumnos.push({
            nombre: nombre,
            nota1: nota1,
            nota2: nota2,
            media: 0  
        });
    }

    alumnos.forEach(alumno => {
        alumno.media = (alumno.nota1 + alumno.nota2) / 2 
    })


    let mejorAlumno = alumnos[0]  
    alumnos.forEach(alumno => {
        if (alumno.media > mejorAlumno.media) {
            mejorAlumno = alumno 
        }
    })

   
    
    alumnos.forEach(alumno => {
        console.log(`Nombre: ${alumno.nombre}, Media: ${alumno.media}`)
    });

    console.log(`El alumno con la mejor media es ${mejorAlumno.nombre} con una media de ${mejorAlumno.media}`)
}

laMedia()

