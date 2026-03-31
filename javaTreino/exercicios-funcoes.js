// FUNCTION

// elevar um número x a uma potência y

// function calculaPotencia(num, pow) {
// 	let resultado = 1;
// 	for (let i = 0; i < pow; i++) {
// 		resultado = resultado * num;
// 	}
// 	return resultado;
// }

// console.log(calculaPotencia(4, 3));
// console.log(calculaPotencia(3, 4));

// Criar função que calcula o fatorial de um número usando recursão.
// fatorial : n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 x 4 x 3 x 2 x 1

// const fatorial = function f(num) {
// 	if (num === 0 || num === 1) return 1;
// 	return num * f(num - 1);
// };

// console.log(fatorial(4));

// Criar uma função para calcular juros compostos
// função deve receber os valores no formato inteiro: valor, % de juros e tempo
// fórmula: valor * (juro elevado a tempo)

// const calculaJuros = (valor, juros, tempo) => {
// 	let taxaJuros = juros / 100 + 1;
// 	return valor * Math.pow(taxaJuros, tempo);
// };

// console.log(calculaJuros(1000, 5, 2));

// FUNÇÕES CALLBACK
//Funções callback são passadas como argumento de outra função, de onde podem receber valores.
//São executadas a partir da função externa.

// Criar função que faça operações matemáticas entre 2 valores (soma e multiplicação)
// função deve receber por parâmetro: operação desejada, valor1 e valor2

// function soma(a,b) { return a + b };
// function multiplica(a,b) {return a * b };

// function calcula(fnOperacao, valorA, valorB) {
// 	return fnOperacao(valorA, valorB);
// }

// console.log(calcula(soma, 5, 5));
// console.log(calcula(multiplica, 5, 5));

// Criar uma função que emita uma mensagem caso usúario x não esteja interagindo com o sistema após quantidade y de tempo
// const userId = '4545656';

// const avisaUsuario = (userId) => console.log(`sessão de ${userId} está inativa`)

// setTimeout(avisaUsuario, 2000, userId);
// setTimeout((userId) => console.log(`sessão de ${userId} está inativa`), 4000, userId);

// function saudacao(nome= ""){
// 	if (nome) {
// 		console.log(`Olá, ${nome}! Boas vindas!`);
// 	} else {
// 		console.log("Olá! Boas vindas!");
// 	}
// }

// saudacao('Lucas');
// saudacao();

// function calcularDesconto(preco, desconto) {
// 	const resultado = preco - (preco * desconto) / 100;
// 	return resultado;
// }

// console.log(calcularDesconto(100, 5));

// const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;
// console.log(calcularMedia(7, 9));

// const verificarParidade = (valor) => {
// 	if (valor % 2 === 0) {
// 		return(`O número ${valor} é par`);
// 	} else {
// 		return(`O número ${valor} é impar`);
// 	}
// };

// console.log(verificarParidade(8));
// console.log(verificarParidade(9));

// function calcularFrete(distancia) {
// 	if (distancia <= 5){
// 		return 5;
// 	} else if (distancia <= 20) {
// 		return distancia * 0.5;
// 	} else {
// 		return 20;
// 	}
// }

// console.log(calcularFrete(3))
// console.log(calcularFrete(7));
// console.log(calcularFrete(25));

// function processarPedido(nome, tipoCliente, callback){
// 	console.log(`Processando pedido de ${nome}...`);
// 	callback(nome, tipoCliente)
// }

// function mensagemPersonalizada(nome, tipo) {
// 	if (tipo === "vip") {
// 		console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
// 	} else if (tipo === "novo") {
// 		console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
// 	} else {
// 		console.log(`Obrigado pela sua compra, ${nome}!`);
// 	}
// }

// processarPedido("Lucas", "vip", mensagemPersonalizada);

function responderUsuario(nome, callback) {
    console.log("Processando sua pergunta...");
    setTimeout(() => {
        callback(nome);
    }, 3000);
}
 
function mostrarResposta(nome) {
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
}
 
responderUsuario("Camila", mostrarResposta);

function avaliarDesempenho(pontuacao, callback) {
    let status = "";
 
    if (pontuacao >= 70) {
        status = "aprovado";
    } else if (pontuacao >= 50) {
        status = "reforco";
    } else {
        status = "reprovado";
    }
 
    callback(pontuacao, status);
}
 
function gerarMensagem(pontuacao, status) {
    console.log(`Pontuação: ${pontuacao}`);
 
    if (status === "aprovado") {
        console.log("Parabéns! Você foi aprovado!");
    } else if (status === "reforco") {
        console.log("Atenção! Você precisa de reforço.");
    } else {
        console.log("Infelizmente, você foi reprovado. Tente novamente.");
    }
}
 
avaliarDesempenho(82, gerarMensagem);

function calcularConsumo(potencia, horasPorDia) {
    return (potencia * horasPorDia * 30) / 1000;
}

function classificarConsumo(consumo) {
    if (consumo < 50) {
        return "Baixo consumo";
    } else if (consumo < 200) {
        return "Consumo moderado";
    } else {
        return "Alto consumo";
    }
}

function exibirResumo(nomeAparelho, consumo, classificacao) {
    console.log(`${nomeAparelho} tem consumo de ${consumo.toFixed(1)} kWh/mês e é classificada como ${classificacao}.`);
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);

const sortearParticipante = (lista) => {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
};
 
const avaliarPontuacao = (pontuacao) => {
    if (pontuacao > 80) {
        return "Parabéns, você foi premiado!";
    } else if (pontuacao >= 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    } else {
        return "Infelizmente, não foi dessa vez.";
    }
};
 
const exibirResultado = (participante) => {
    console.log("Sorteando...");
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));
    }, 2000);
};
 
function realizarSorteio(lista) {
    const sorteado = sortearParticipante(lista);
    exibirResultado(sorteado);
}
 
const participantes = [
    { nome: "Laura", pontuacao: 92 },
    { nome: "Pedro", pontuacao: 67 },
    { nome: "Clara", pontuacao: 44 }
];
 
realizarSorteio(participantes);

function contagemRegressiva(numero) {
  if (numero > 0) {
    console.log(numero);
    contagemRegressiva(numero - 1);
  } else {
    console.log("Lançamento!");
  }
}
 
contagemRegressiva(5);