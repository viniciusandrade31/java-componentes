const pessoa = {
	nome: "Roberta R",
	nascimento: "2020-01-01",
	cpf: "23445667889",
	pontuacao: 4576,
	trofeus: ["speedrunner", "indie"],
};

// imprima no terminal o nome da pessoa e um dos troféus.
console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);

// exclua uma propriedade do objeto.

delete pessoa.cpf;
console.log(pessoa);

// criar uma função para iterar os troféus.

function exibeTrofeus(listaTrofeus) {
	for (const trofeu of listaTrofeus) {
		console.log(`Tem o troféu ${trofeu}`);
	}
}

exibeTrofeus(pessoa.trofeus);

const cliente = {
	nome: "Joana A",
	score: 865,
	recorrente: true,
	tags: ["premium", "clube"],
	saudarCliente: function () {
		console.log(`Boas vindas, ${this.nome}`);
	},
};

cliente.informarScore = function informarScore() {
	console.log(`Seu score é ${this.score}`);
};

cliente.informarScore();

pessoa.calcularIdade = function calcularIdade() {
	const anoNasc = parseInt(this.nascimento.slice(0, 4));
	const idade = new Date().getFullYear() - anoNasc;
	console.log(`A idade é ${idade}`);
};

pessoa.calcularIdade();
console.log(pessoa);
console.log(Object.values(cliente));
console.log(Object.keys(cliente));
console.log(Object.entries(cliente));

for (const info in cliente) {
	const texto = `Chave ${info}, valor do tipo ${typeof cliente[info]}`;
	console.log(texto);
}

const clientes = [
	{
		nome: "Marina M",
		ativo: true,
	},
	{
		nome: "Rafael R",
		ativo: false,
	},
	{
		nome: "Fabio F",
		ativo: false,
	},
];

for (const cliente of clientes) {
    const status = cliente .ativo ? "Ativo" : "Inativo";
    console.log(`Status cliente ${cliente.nome}: ${status}`)
}

const produto = {
	nome: "Fone de ouvido",
	preco: 149.9,
	disponivel: true,
};

console.log(produto);

const configuracoes = {
	tema: "escuro",
	notificacoes: "ativas",
	idioma: "pt-BR",
};

console.log(configuracoes.tema);
console.log(configuracoes["idioma"]);

const receita = {
	nome: "Macarrão alho e oleó",
	ingredientes: ["Macarrão", "Azeito", "Alho", "Sal", "Água"],
	tempoPreparo: 20,
};

console.log(`Ingrediente complementar: ${receita.ingredientes[2]}`);

const carro = {
	marca: "Toyota",
	modelo: "Corolla",
	ano: 2022,
	modeloAntigo: "Corolla XEi",
};

delete carro.modeloAntigo;
console.log(carro);

const dispositivos = [
	{ nome: "Impressora", status: "ativo" },
	{ nome: "Scanner", status: "inativo" },
	{ nome: "Projetor", status: "ativo" },
];

for (const dispositivo of dispositivos) {
	console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`);
}

const maquina = {
	nome: "Esteira Transportadora",
	funcionando: true,
	exibirStatus: function () {
		if (this.funcionando) {
			console.log(`A máquina ${this.nome} está funcionando.`);
		} else {
			console.log(`A máquina ${this.nome} está parada.`);
		}
	},
};

maquina.exibirStatus();

const dados = [
	["nome", "João"],
	["idade", 30],
	["cidade", "Curitiba"],
];

//const obj = Object.fromEntries(dados);
//console.log(obj);

function montarObjeto(arrPares) {
	const resultado = {};

	for (const [chave, valor] of arrPares) {
		resultado[chave] = valor;
	}

	return resultado;
}

console.log(montarObjeto(dados));

const relatorio = {
    temperatura: 75,
    vibracao: 40,
    pressao: 55, 
    nivelRuido: 30
};

const categorias = Object.keys(relatorio);
const valores = Object.values(relatorio);
const entradas = Object.entries(relatorio);

console.log("Categorias avaliadas:", categorias);
console.log("Valores registrados:", valores);

console.log("\nDetalhamento:");
for (let [chave, valor] of entradas) {
    const status = valor > 50 ? "alerta" : "ok";
    console.log(`${chave}: ${valor} (${status})`);
}

const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let totalDias = 0;
let mesesComParada = 0;

for (let mes in manutencao) {
  const dias = manutencao[mes];
  totalDias += dias;

  if (dias > 0) {
    mesesComParada++;
  }
}

console.log(`Total de dias parados: ${totalDias}`);
console.log(`Meses com manutenção registrada: ${mesesComParada}`);

if (totalDias > 20) {
  console.log("Status: Atenção! Acima do limite anual.");
} else {
  console.log("Status: Dentro do limite anual");
}

const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "João", progresso: 85 },
    { nome: "Ana", progresso: 40 },
    { nome: "Juliano", progresso: 72 },
    { nome: "Patrícia", progresso: 60 }
  ],

  gerarRelatorio: function () {
    let totalProgresso = 0;

    for (let estudante of this.estudantes) {
      const situacao = estudante.progresso >= 70 ? "Aprovado" : "Em andamento";
      console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${situacao}`);
      totalProgresso += estudante.progresso;
    }

    const media = (totalProgresso / this.estudantes.length).toFixed(2);

    console.log(`\nTotal de estudantes: ${this.estudantes.length}`);
    console.log(`Média geral da turma: ${media}%`);
  }
};

curso.gerarRelatorio();