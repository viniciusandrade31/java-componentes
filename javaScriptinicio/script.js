// esse é um comentário do código! não será interpretado pelo JS
// essa é uma variável que guarda o valor da minha idade atual
//Formas de criar variavel
//1 - variavel global, pouco usada
//2- var, antiga e pouco usada
//3- let, atual e muito usada. Pode atribuir outro valor pra ela
//4- const (constante), é um variavel que não pode ser atribuido outro valor

console.log(typeof estaChovendo)
let cidade
console.log(typeof cidade)
let aprendeuJS = null
console.log(typeof aprendeuJS)
let simbulo = Symbol()

const numeroUm = 4
const numeroDois = 8
const subtracao = numeroUm - numeroDois

console.log('Subtração: ', subtracao)

const divisao = numeroUm / numeroDois

console.log('Divisão: ', divisao)

let idade = 36
let idadeIrmao = 16

const souMaiorDeIdade = idade >= 18
const souMenorDeIdade = idadeIrmao >= 18

console.log("Sou maior de idade: ", souMaiorDeIdade)
console.log("Meu irmão é maior de idade: ", souMenorDeIdade)

