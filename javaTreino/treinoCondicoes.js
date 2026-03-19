let meuContador = 0
for (meuContador === 0; meuContador <= 10; meuContador++){
    console.log(meuContador)
}

let somaNumeros = 0
let contador = 1

for ( contador = 1; contador <= 100; contador++){
    somaNumeros += contador;
}
console.log('Soma de 1 a 100:' +somaNumeros)

let tabuada = 5

for (let i = 1; i <= 10; i++) {
    console.log(tabuada + "x" + i + "=" + (tabuada * i))
}

contador = 10

while (contador >= 0 ){
    console.log('Número atual:', contador)
    contador--
}

console.log('Contagem finalizada!')

let numeroDigitado
let quantidade = 0
let repeticoes = 0

do {
    if (repeticoes === 0){
        numeroDigitado = 5
    } else if (repeticoes === 1) {
        numeroDigitado = 10
    }
    else {
        numeroDigitado = 0
    }
    if (numeroDigitado !== 0) {
        quantidade++
    }

    repeticoes++;
} while (numeroDigitado !== 0)

console.log('Total de números digitados: ' + quantidade)

let numeroSecreto = 7;

for (let tentativa = 1; tentativa <= 3; tentativa++) {
  let numeroTentado;

  if (tentativa === 1) {
    numeroTentado = 3;
  } else if (tentativa === 2) {
    numeroTentado = 5;
  } else {
    numeroTentado = 7;
  }

  if (numeroTentado === numeroSecreto) {
    console.log("Acertou!");
  } else {
    console.log("Tente novamente");
  }
}

let anoNascimento = 2000; 

let anoAtual = 2025; 

for (let ano = anoNascimento; ano <= anoAtual; ano++) { 

console.log("Em " + ano + " você tinha " + (ano - anoNascimento) + " anos."); 

} 

for (let i = 1; i <= 50; i++) { 

if (i % 2 === 0) { 

console.log(i); 

} 

} 

let multiplosDe3 = 0; 

for (let i = 1; i <= 100; i++) { 

if (i % 3 === 0) { 

multiplosDe3++; 

} 

} 

console.log("Números entre 1 e 100 divisíveis por 3: " + multiplosDe3); 

let opcao;
let passo = 0;

do {
  if (passo === 0) {
    opcao = 1;
  } else if (passo === 1) {
    opcao = 2;
  } else {
    opcao = 3;
  }

  if (opcao === 1) {
    console.log("Ver saldo");
  } else if (opcao === 2) {
    console.log("Fazer depósito");
  } else if (opcao === 3) {
    console.log("Sair");
  }

  passo++;
} while (opcao !== 3);