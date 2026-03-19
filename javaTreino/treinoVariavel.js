const alunoUm = 8
const alunoDois = 3
const media = (alunoUm + alunoDois) / 2
const aprovado = media >= 7 == true

console.log("A média das notas da turma foram: ", media , "Turma ficou com a nota maior que 7 de media: ", aprovado) 

const valorCompra = 35.90
const valorPago = 50
const valorTroco = valorPago - valorCompra

console.log("O troco deve ser de: ", valorTroco.toFixed(2))

const senhaCofre = 6732
const senhaDigitada = 9754
const verificacao = senhaCofre === senhaDigitada

console.log("A senha digitada está correta: ", verificacao)

const totalAulas = 30
const faltas = 4
const presenca = (totalAulas / faltas) * 100 <= 25
console.log("O auluno teve a quantidade de presença necessaria para passar de ano: ", presenca) 

const temLogin = true
const temSenha = false
const loginCorreto = (temLogin ) && (temSenha )
console.log("O login de acesso está correto: ", loginCorreto)

const numeroQualquer = 6
const numeroDoisQualquer = 2
const saoPares = (numeroQualquer % 2 == 0) && (numeroDoisQualquer % 2 == 0)
console.log("Os números são pares: ", saoPares)
const numerosIguais = numeroQualquer === numeroDoisQualquer
console.log("Os números são iguais: ", numerosIguais)

const calculandoPorcentagem = (120 * 15) / 100
console.log("15% de 120 é igual a X: ", calculandoPorcentagem)

const operacaoMat = 2 + 3 * 5
console.log("Resultado da expressão 2 + 3 * 5: ", operacaoMat)

