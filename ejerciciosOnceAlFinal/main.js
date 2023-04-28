
// Ejercicios 11 al 20

// ejercicio11

const alumno = {
    nombre: 'Marco',
    apellido: 'Miquel',
    colorFavorito: 'Verde',
    auto: 'Renault Clio',
    nombreMascota: 'Nina',
    edad: 36
}
console.log(alumno);

// ejercicio12

const mascota = {
    nombre: 'Nina',
    raza: 'gato',
    edad: 3,
    comidaFavorita: 'Pescado',
    colorPelaje: 'blanco'
}
console.log(mascota);

//ejercicio13

const frutas = ['manzana', 'plátano', 'pera', 'sandía', 'melón'];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);

//ejercicio14

const numeros = [0,1,2,3,4];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

//ejercicio15

const familia = ['mamá', 'papá', 'hijo', 'tío', 'primo'];
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

//ejercicio16

const textoAleatorio = `Mi fruta favorita es el ${frutas[1]},
    mi número de la suerte es ${numeros[3]} 
        y mi mejor amigo es mi ${familia[4]}.`
console.log(textoAleatorio);

//ejercicio17

// v.1
// let miEdad = prompt('Ingresa tu edad:');
// let edadCompanero = prompt('Ingresa la edad de tu compañero:');

// let soyMayor = (miEdad > edadCompanero);
// console.log(`Mi edad es mayor a la de mi compañero: ${soyMayor}`);
// let soyMenor = (miEdad < edadCompanero);
// console.log = (`Mi edad es menor a la de mi compañero: ${soyMenor}`);

//v.2
let miEdad = prompt('Ingresa tu edad:');
let edadCompanero = prompt('Ingresa la edad de tu compañero:');

let soyMayor = (miEdad > edadCompanero);
let soyMenor = (miEdad < edadCompanero);
let mismaEdad = (miEdad === edadCompanero);


if (miEdad > edadCompanero) {
    console.log(`Mi edad es mayor a la de mi compañero: ${soyMayor}`);
}if (miEdad < edadCompanero) {
    console.log(`Mi edad es menor a la de mi compañero: ${soyMenor}`);
}if (miEdad === edadCompanero){
    console.log(`tenemos la misma edad: ${mismaedad}`); 
}


//ejercicio18

let edadActual = Number(prompt('Ingresa tu Edad:'));
let mayoriaDeEdad = 18;

if (edadActual >= mayoriaDeEdad) {
    console.log(`Soy mayor de edad, tengo ${edadActual - mayoriaDeEdad}`);
}else{
    console.log('No soy mayor de edad');
}

//ejercicio19

let edad = Number(prompt('Ingresa tu Edad:'));
let estatura = Number(prompt('Ingresa tu estatura en CM:'));

if(edad >= 6 && estatura >= 120){
    console.log(`Puede subir a la atracción, edad: ${edad} y estatura: ${estatura}`);
}else{
    console.log(`No puede subir`);
}

//ejercicio20

let estado = prompt(`Ingresa tu status VIP/NORMAL/LIMITADO:`);
let saldo = Number(prompt(`Ingresa tu saldo:`));

if (estado == 'VIP'|| estado == 'vip' || estado == 'Vip' || saldo >= 1000) {
    console.log(`La persona puede pasar: ${estado}, ${saldo}`);
}else{
    console.log(`No puede pasar`);
}