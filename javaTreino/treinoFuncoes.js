function saudacao() {
  console.log('Olá! Seja bem-vindo(a)!')
}
saudacao();

function apresentarPessoa(nome, idade) {
  console.log('Olá, meu nome é', nome , 'e tenho' , idade , 'anos.')
}
apresentarPessoa('Vinícius', 24)

function calcularIMC(peso, altura){
  calcularIMC = peso / (altura * altura);
  console.log('Seu IMC é:' , calcularIMC)
}
calcularIMC(90, 1.70)

function verificarAprovacao(nota){
  if (nota >= 7){
    console.log('Aprovado');
  } else {
    console.log('Reprovado')
  }
}

verificarAprovacao(6)

function ehPar(numero){
  return numero % 2 === 0
}

console.log('O número é par?', ehPar(4))

function calcularTroco(valorCompra, valorPago){
  let troco = valorPago - valorCompra
  return troco
}

let resultadoTroco = calcularTroco(35.9, 50)
console.log('Troco: R$', resultadoTroco)

const somarArrow = (a, b) => a + b

console.log('Soma (arrow): ', somarArrow(3,7))

function executarAcao(acao) {

  acao()

}

executarAcao(function() {
  console.log('Executando ação!')
})

function fazerPergunta(pergunta, respostaCorreta) {
  let respostaUsuario = respostaCorreta

  if(respostaUsuario === respostaCorreta){
    
    console.log('Resposta correta!')

  }else {
    console.log('Resposta errada!')

  }

}

fazerPergunta('Qual é a capital do Brasil?', 'Brasília')




 