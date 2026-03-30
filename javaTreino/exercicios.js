// If/Else

// definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 4;
const operacao = "multiplicação";

if (operacao === "soma") {
	console.log(num1 + num2);
} else if (operacao === "multiplicação") {
	console.log(num1 * num2);
} else {
	console.log("Operação não identificado.");
}

// localizar o nível de bônus de acordo com a faixa sarial
// ex: $11000 e acima: 3% de bônus
//     $10999 a $7000: 5% de bônus
//     $ 6999 a $4000: 7% de bônus
//     $ 3999 p baixo: 9% de bônus

const salario = 7000;

if (salario >= 11000 && salario < 20000) {
	console.log("3% de bônus");
} else if (salario < 11000 && salario >= 7000) {
	console.log("5% de bônus");
} else if (salario < 7000 && salario >= 4000) {
	console.log("7% de bônus");
} else if (salario < 4000) {
	console.log("9% de bônus");
} else {
	console.log("Salario fora da escala!");
}

// OPERADORES

//Verificar se um ano é bissexto.
//Um ano é bissexto quando:
// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

const ano = 2028;
// const ano = 2000
// const ano = 2022
// const ano = 1992

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
	console.log(`${ano} é bissexto`);
} else {
	console.log(`${ano} não é bissexto`);
}

// OP CONDICIONAL E SWITCH

//Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas.

const nome = "Roberta";
const nota = 8;
const faltas = 2;

const recebeBonus = nota >= 0 && faltas <= 2 ? `${nome} recebe bônus` : `${nome} não recebe bônus`;

console.log(recebeBonus);

// Criar um fluxo que identifica o tipo de usuário e comunica de acordo.
// ex: usuário free tem acesso limitado ao app
//     usuário premium tem acesso a todas as funções
//     usuário super premium tem acesso total e bônus especiais

const user = "free";

switch (user) {
	case "free":
		console.log("acesso limitado");
		break;
	case "premium":
		console.log("acesso total ao app");
		break;
	case "super premium":
		console.log("acesso total ao app e bônus");
		break;
	default:
		console.log("tipo de user desconhecido");
		break;
}

let idade = 20;

if (idade >= 18) {
	console.log("Acesso permitido.");
} else {
	console.log("Acesso negado");
}

const temperatura = 15;

if (temperatura < 15) {
	console.log("Frio");
} else if (temperatura >= 15 && temperatura <= 25) {
	console.log("Agradável");
} else {
	console.log("Quente");
}

idade = 12;

if (idade < 12) {
	console.log("Infantil");
} else if (idade >= 12 && idade < 18) {
	console.log("Juvenil");
} else {
	console.log("Adulto");
}

const diaSemana = 6;

if (diaSemana === 6 || diaSemana === 0) {
	console.log("A loja está aberta em horário especial: 10h às 14h.");
} else {
	console.log("A loja está aberta no horário normal: 9h às 18h.");
}

const usuario = "admin";

if (usuario === "admin") {
	console.log("Login bem-sucedido!");
} else {
	console.log("Usuário inválido.");
}

const fruta = "laranja";

if (fruta === "abacaxi" || fruta === "laranja") {
	console.log(fruta, "é compatível para a receita.");
} else {
	console.log(fruta, "é incompatível para a receita.");
}

const carrinhoVazio = true;

if (carrinhoVazio === false) {
	console.log("Compra finalizada com sucesso!");
} else {
	console.log("Não é possível finalizar a compra: carrinho vazio.");
}

const statusAprov = "aprovado";

switch (statusAprov) {
	case "pedente":
		console.log("Pagamento pendente.");
		break;
	case "aprovado":
		console.log("Pagamento aprovado.");
		break;
	case "recusado":
		console.log("Pagamento recusado.");
		break;
	default:
		console.log("Status inválido.");
		break;
}

const pontos = 60;
const vidas = 1;

if (pontos > 50 && vidas > 0) {
	console.log("Próximo nível liberado!");
} else {
	console.log("Não pode avançar para o próximo nível.");
}

const bateria = 10;
 
const statusBateria = (bateria < 20) 
  ? "Crítica" 
  : (bateria <= 80) 
    ? "Moderada" 
    : "Cheia";
 
console.log(statusBateria);