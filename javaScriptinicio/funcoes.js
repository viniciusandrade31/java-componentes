function f(x) {
    return x + 2;
}

console.log(f(2));
console.log(f(30));

//function saudacao(nome) {
//    console.log('Olá,', nome)
//}
//saudacao('Vinícius') // Vinicius é o "argumento"
//saudacao('Julia')
//saudacao('Carla')

//function calcularDobro(numero) {
//    return numero * 2
//}

//const numeroDobrado = calcularDobro(2)
//console.log('O dobro de 4 é:', numeroDobrado)

//Arrow function

//const saudacao = (nome) => {
//    console.log('Vida longa e próspera,', nome)
//}

const saudacao = nome => console.log('Olá,' , nome)
saudacao('Vinícius') // Vinícius é o "argumento"
saudacao('Julia')
saudacao('Carla')

//const calcularDobro = (numero) => {
//    return numero * 2
//}

const calcularDobro = numero => numero * 2
const numeroDobrado = calcularDobro(4)
console.log('O dobro de 4 é:', numeroDobrado)


