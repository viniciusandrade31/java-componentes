// HOF -> Higher-Order Function === função que recebe outra função como paramentro

function calcular(numero1, numero2, operacao) {

    return operacao(numero1, numero2)
}

function soma(num1, num2) {
    return num1 + num2
}

function divisao(num1, num2){
    return num1 / num2
}

function multiplicacao(num1, num2){
    return num1 * num2
}

function subtracao(num1, num2) {
    return num1 - num2
}

const resultadoSoma = calcular(3, 8, soma)
console.log('Resultado da soma:', resultadoSoma)

const resultadoDivisao = calcular(2, 4, divisao)
console.log('Resultado da divisão:', resultadoDivisao)

const resultadoMutiplicacao = calcular(3, 45, multiplicacao)
console.log('Resultado da multiplicação:', resultadoMutiplicacao)

const resultadoSubtracao = calcular(3, 8, subtracao)
console.log('Resultado da subtração:', resultadoSubtracao)