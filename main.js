// Booleanos


let booleano1 = true;
let booleano2 = false;
//Crear una variable booleanoAnd cuyo valor sea la comparación booleana booleano1 AND booleano2.

let boooleanoAnd = booleano1 && booleano2;

//Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1  OR booleano2.

let booleanoOr = booleano1 || booleano2;

//Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1.

let boleanoNot = !booleano1;

//Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2).

let booleanoMixO = booleano1 || booleano2 && !booleano1 || booleano2;

//Operadores

//Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado.

let valorDivision = 17 / 3;
console.log(valorDivision.toString().substring(0, 4))

//Crear variable valorResto cuyo valor sea el resto de 17 entre 7.
let valorResto = 17 - 7;

//Logica de programacion
//Crea una variable A cuyo valor sea el número 9, y después crea una variable B cuyo valor sea un string con el número 9. Desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”. ¿Qué pasa si en vez de tener A == B, comprobamos que A === B?

let a = 9;
let b = '9';

if (a === b) {
    console.log('no son iguales')
} else {
    console.log(' no son iguales');
}


if (a == b) {
    console.log('Son iguales')
}

//Crea una variable mochila que sea un array de elementos. Desarrolla la lógica para que: a) si mochila tiene más de 10 elementos, muestre por consola el mensaje “No puedo cargar con tantas cosas”; b) si mochila contiene entre 10 y 2 elementos, se muestre por consola “Qué bien voy con mi mochila”, y, si no,  muestre por consola “Creo q no necesito una mochila”.

let mochila = ['lapicera', 'cuadernos', 'libro', 'botella', 'comida', 'remera', 'zapatos', 'portatil', 'movil', 'mouse',]

if (mochila.length > 10) {
    console.log('No puedo cargar con tantas cosas');
} else if (mochila.length < 10 || mochila.length > 2) {
    console.log('Que bien voy con mi mochila')
} else {
    console.log('Creo qe no necesito monchila')
}

//Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10.

let contarHasta10 = 0

while (contarHasta10 <= 10) {
    console.log(contarHasta10);
    contarHasta10++;
}

//Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario en el que si diaFestivo es true devuelva un console.log de ‘Hoy no trabajo’ y, si es false, devuelva ‘Hoy trabajo’.

let diaFestivo = true;

diaFestivo ? console.log('Hoy no trabajo') : console.log('Hoy trabajo');

let arrayBucle = [];

//Crea una variable arrayBucle tipo array vacía y rellénala con números del 4 al 18 utilizando un bucle.

for (let index = 4; index < 19; index++) {
    arrayBucle.push(index)
}

console.log(arrayBucle);

//Recorre la variable creada anteriormente arrayBucle, suma todos sus elementos y guárdalos en una variable de nombre resultado.

let resultado;
for (const numero of arrayBucle) {
    let numeros = numero
    resultado = numero + numeros
}
console.log(resultado);

//Dado el siguiente array [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle for of y muestra por consola todos sus elementos. Después, recórrelo utilizando el bucle for in mostrando también por consola todos sus elementos.

let nombres = ['Con', 'Sofia', 'aprendiendo', 'bucles'];

for (const nombre of nombres) {
    console.log(nombre)
}

for (const j in nombres) {
    console.log(nombres[j])
}

//Crea un bucle utilizando while que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3.

let iterar = 0;
while (iterar < 20) {
    if (iterar % 3 === 0) {
        console.log('patata');
    }
    iterar++;
}

//Utiliza la siguiente array para resolver los próximos ejercicios: 

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },


    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

//Crea un array con la gente cuyo nombre tiene 4 letras sin utilizar el método filter de los arrays y muéstralo por consola.

let nombresConCuatroLetras = [];

for (const nombre of gente) {
    if (nombre.nombre.length === 4) {
        nombresConCuatroLetras.push(nombre.nombre)
    }
}
console.log(nombresConCuatroLetras);

//Crea un array con la gente cuyo nombre empieza por J y sean menores de 40 años sin utilizar el método filter de los arrays y muéstralo por consola.

let nombreYedad = [];

for (const personas of gente) {
    if (personas.nombre[0] === 'J' && personas.edad < 40) {
        nombreYedad.push(personas.nombre, personas.edad)
    }
}

console.log(nombreYedad);

//Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':
// TEST 1

const ordenador = {
    marca: 'La pava',
    tipo: "portátil",
    perifericos: ['teclado', 'touchPad'],
    almacenamiento: {
        discos: ['aslkdnas', 'HDD'],
        maestro: 0
    }
}

if (typeof ordenador === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}


// TEST 2


if (ordenador.marca === "La pava") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 3

if (ordenador.tipo === "portátil") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 4
if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 5
if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 6
if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

//Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes':

let arr = [
    {
        name: 'pepito',
        age: 25
    },
    {
        name: 'pepito',
        age: 14,
    },

    {
        name: 'Juan',
        age: 12
    }
]

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 2 verificar
if (typeof arr[0] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 3
if (typeof arr[1] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 4
if (typeof arr[2] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 5
if (arr.length === 3) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 6
if (arr[0].name === arr[1].name) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}



// TEST 7
if (arr[1].name === "pepito") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 8
if (arr[1].age > arr[2].age) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}


// TEST 9
if (arr[0].age === 25) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 10
if (typeof arr[2].name === "string") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}


// TEST 111
if (arr[2].name[0] === "J") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
