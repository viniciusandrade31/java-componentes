// FOR

//Gerar números aleatórios de 1 a 50 e
// Interromper o laço caso o número gerado seja 15.
// Interromper depois de 30 tentativas e contar a quantidade de tentativas.

// const numro = Math.floor(Math.random() * (50 - 1 + 1) + 1);

for (let contador = 1; contador <= 30; contador++) {
	const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
	if (numero === 15) {
		console.log(`${numero} em ${contador} tentativas`);
		break;
	}
}

// Gerar números aleatórios de 1 a 50
// Criar um contador que só é incrementado caso os números NÃO sejam divisíveis por 5
// No final, exibir o valor do contador
let contador = 0;

for (let i = 1; i <= 30; i++) {
	const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);
	if (numero % 5 === 0) {
		continue;
	}
	contador++;
}
console.log(contador);

// Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até resultado

const numeroSecreto = 48;
let numeroAleatorio = 0;
let tentativas = 0;

while (numeroSecreto !== numeroAleatorio) {
	numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
	tentativas++;
}

console.log(`adivinhou em ${tentativas} tentativas`);

// Criar um laço que gere um número aleatório de 1 a 50
// executar o laço enquanto não gerar um número par

let numeroRandom = 0;

do {
	numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
	console.log(numeroRandom);
} while (numeroRandom % 2 !== 0);

console.log(numeroRandom);

// criar um laço que recebe um texto e verifica se é um palíndromo
// imprimir no console o texto, informado se é ou não palíndromo

const texto = "luz azul";
// const texto = 'arara';
// const texto = 'luz azul';

let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
	textoInvertido += texto[i];
}

const result = texto === textoInvertido ? `${texto} é palíndromo` : `${texto} não é palíndromo`;

console.log(result);

const numeroFinal = 5;

for (let i = 1; i <= numeroFinal; i++) {
	console.log(i);
}

const numeroDesce = 0;

for (let i = 10; i >= numeroDesce; i--) {
	console.log(i);
}

console.log("Lançar!");

const numerosPares = 10;

for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

const senha = "seguranç@2025";
  
for (let i = 0; i < senha.length; i++) {
  console.log(`Caractere ${i + 1}: ${senha[i]}`);
}

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];
let i = 0;
 
while (entradas[i] !== "fim") {
  console.log("Nome:", entradas[i]);
  i++;
}

for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("Número proibido encontrado! Encerrando...");
    break;
  }
  console.log(i);
}

const totalDias = 10;
let dia = 1;
let economia = 0;
 
do {
  economia += dia;
  dia++;
} while (dia <= totalDias);
 
console.log(`Total economizado: R$ ${economia}`);

const tempoMinimo = 5;
const temperaturaIdealAlcancadaEm = 3;
 
let segundos = 0;
 
do {
    segundos++;
    console.log(`Aquecendo... segundo ${segundos}`);
 
    if (segundos === temperaturaIdealAlcancadaEm) {
        console.log("Temperatura ideal atingida.");
    }
 
} while (segundos < tempoMinimo);
 
console.log(`Tempo total de aquecimento: ${segundos} segundos`);

const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
let processadas = 0;
 
for (let i = 0; i < caixas.length; i++) {
  let valor = caixas[i];
 
  if (valor < 0) {
    console.log("Caixa danificada, ignorada.");
    continue;
  }
 
  console.log(`Caixa processada: ${valor}`);
  processadas++;
 
  if (processadas === 5) {
    console.log("Limite de caixas processadas atingido!");
    break;
  }
}

const tentativasB = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";
 
 i = 0;
let acessoLiberado = false;
 
while (i < tentativasB.length && i < 3) {
  if (tentativasB[i] === senhaCorreta) {
    console.log("Acesso permitido!");
    acessoLiberado = true;
    break;
  } else {
    console.log(`Tentativa ${i + 1} inválida.`);
  }
  i++;
}
 
if (!acessoLiberado) {
  console.log("Acesso bloqueado. Número máximo de tentativas atingido.");
}