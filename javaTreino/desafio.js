// Calculadora de troco
console.log("Boas vindas a calculadora de trocos!")
let valorCompra = 17.50
let valorPago = 20
 
let trocoCompra = valorPago - valorCompra
console.log("Valor da compra: R$", valorCompra)
console.log("Valor recebido: R$", valorPago)

console.log("O troco que deve ser entregue é de: R$", trocoCompra)

// contar quantos numeros pares e quantos numeros ímpares nós temos entre 0 e 100

let totalNumerosPares = 0
let totalNumerosImpares = 0

//laço de repetição

for (let contador = 0; contador <= 100; contador++) {
    if (contador % 2 === 0 ) {
        totalNumerosPares++
    }
}
for (let contador = 0; contador <= 100; contador++){
    if (contador % 2 != 0) {
        totalNumerosImpares++
    }
}

console.log("Total de números pares: " + totalNumerosPares)
console.log("Total de números ímpares: " + totalNumerosImpares)

// Desafio do quiz

const readline = require('readline')

const r1 = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vindo(a) ao Quiz de JavaScript!')
console.log('Responda com a letra correta: a, b ou c\n')

let acertos = 0

r1.question('1) Qual palvra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n>', (resposta1) => {
    if (resposta1 == 'b') {
        acertos++;
    }
r1.question('2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n>', (resposta2) =>{
    if (resposta2 == 'c'){
        acertos++;
    }
r1.question('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n>', (resposta3) => {
    if (resposta3 == 'b'){
        acertos++;
    }

    if (acertos == 3){
        console.log('Parabéns, você gabaritou!')
    } else if (acertos == 2){
        console.log('Muito bom, continue assim!')
    } else if (acertos == 1){
        console.log('Bom! Continue estudando')
    } else {
        console.log('Continue praticando e tente novamente!')
    }
    r1.close()
})
})
})