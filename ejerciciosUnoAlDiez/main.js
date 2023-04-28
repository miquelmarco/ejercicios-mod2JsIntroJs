
// ejercicios 1-10

let miNombre = 'Marco';
let miApellido = 'Miquel';
let miEdad = 36;
let miMascota = 'Chiqui';
let edadMascota = 8;

console.log(miNombre, miApellido, miEdad, miMascota, edadMascota);

let nombreCompleto = miNombre + ' ' + miApellido;

let textoPresentacion = `Hola, mi nombre es ${nombreCompleto}, tengo ${miEdad} y un gato llamado ${miMascota} de ${edadMascota}.`
//Estoy convencido que tener un gato es requisito para ser programador.

console.log(textoPresentacion);

//operadores aritméticos

let sumaEdades = miEdad + edadMascota;
console.log(sumaEdades);

let restaEdades = miEdad - edadMascota;
console.log(restaEdades);

let productoEdades = miEdad * edadMascota;
console.log(productoEdades);

let divisionEdades = miEdad / edadMascota;
console.log(divisionEdades);

//no se si es un error pero el ejercicio 8 es igual al 10
//le agregaré lo del ejercicio 9

let presentacionCompleta = `${textoPresentacion}, nuestras edades suman ${sumaEdades}, 
restan ${restaEdades}, multiplican ${productoEdades} y por último dividen ${divisionEdades}.`
console.log(presentacionCompleta);

// fin ejercicios 1-10