//Operadores Aritméticos
const numero1 = 20;
const numero2 = 40;
//1. Suma (+): Suma numero1 y numero2. Muestra el resultado por consola.
function sumar(numero1, numero2) {
    return numero1 + numero2;
}
console.log("La suma es: ", sumar(numero1, numero2));

//2. Resta (-): Resta numero1 y numero2. Muestra el resultado por consola.
function restar(numero1, numero2) {
    return numero1 - numero2;
}
console.log("La resta es: ", restar(numero1, numero2));

//3. Multiplicación (*): Multiplica numero1 y numero2. Muestra el resultado por consola.
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
console.log("La multiplicacion es: ", multiplicar(numero1, numero2));

//4. División (/): Divide numero1 y numero2. Muestra el resultado por consola.
function dividir(numero1, numero2) {
    return numero1 / numero2;
}
console.log("La division es: ", dividir(numero1, numero2));

//5. Modulo (%):  Saca el modulo entre numero2 y numero1. Muestra el resultado por consola.
function modulo(numero1, numero2) {
    return numero2 % numero1;
}
console.log("El modulo es: ", modulo(numero2, numero1));