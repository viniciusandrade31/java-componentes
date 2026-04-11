function criaArrNum(inicio, fim) {
	const arr = [];
	let elemento = inicio;

	for (let i = 0, j = 0; j < fim; i++, elemento++) {
		arr[i] = elemento;
		j = elemento;
	}
	return arr;
}

console.log(criaArrNum(12, 20));

//clonar array multidimensional com "deep copy"
// por que não podemos clonar arrays via variável

const arr1 = [[1, 2], 2, 3];

const copiaArray = (arr) => {
	const copia = [];
	arr.forEach((elem) => {
		if (Array.isArray(elem)) {
			copia.push(copiaArray(elem));
		} else {
			copia.push(elem);
		}
	});
	return copia;
};

const arr2 = copiaArray(arr1);
arr1[0][0] = 5;

console.log(arr1);
console.log(arr2);

const cpfs = ["1212312", "2431231", 42131245, "21412351", 4123125451];

const result = cpfs.map((cpf) => (typeof cpf === "string" ? cpf : cpf.toString()));

console.log(result);

const listaDeCompras = ["arroz", "feijão", "macarrão", "tomate"];

listaDeCompras[3] = "fruta";

console.log(`Segundo item da lista: ${listaDeCompras[1]}`);
console.log(listaDeCompras)

const despesas = [120, 80, 45.5, 200, 60];
let total = 0;

for (let i = 0; i < despesas.length; i++) {
	total += despesas[i];
}

console.log(`Total de despesas: R$ ${total}`);

const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];

for (let nome of estudantes) {
    console.log(`Estudante: ${nome}`)
}

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];

mensagens.forEach(msg => {
  console.log("Notificação:", msg);
});

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];
tarefas.push('Pagar boletos')
console.log('Lista após adicionar tarefa:',  tarefas)
tarefas.pop();
console.log('Lista após remover a última tarefa:',  tarefas)

const pedidos = ['camiseta', 'calça', 'tênis'];

const pedidosCopia = pedidos.slice();

pedidosCopia.push('boné');

console.log(pedidos)
console.log(pedidosCopia)

const livros = ["Dom Casmurro", "O Cortiço", "Capitães da Areia", "Iracema"];
const livroProcurado = "O Cortiço";

if (livros.indexOf(livroProcurado) === -1) {
	console.log(`O livro ${livroProcurado} não foi encontrado.`);
} else console.log(`O livro ${livroProcurado} está disponível.`);

const precos = [100, 80, 50, 120];

const precosComDesconto = precos.map(preco => preco * 0.9);
console.log("Preços com desconto:", precosComDesconto)

const participantes = [
	{ nome: "Ana", idade: 17 },
	{ nome: "Bruno", idade: 22 },
	{ nome: "Carla", idade: 19 },
	{ nome: "Daniel", idade: 15 },
	{ nome: "Eduarda", idade: 25 },
];

const autorizados = participantes.filter((p) => {
	p.idade >= 18 ? console.log(`Acesso liberado para: ${p.nome}`) : false;
	return p.idade >= 18;
});

const aprovados = autorizados.map((p) => p.nome);

console.log("Lista de aprovados:", aprovados);

const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

let relatorio = ''; 
let produtosMaisVendidos = ''; 
 
let totalPorProduto = ''; 
 
const maisLucrativo = { nome: '', totalVendas: 0 }; 
 
produtos.forEach(prod => { 
 
  const totalVendidoProduto = prod.preco * prod.quantidadeVendida; 
 
  relatorio += `Produto: ${prod.nome} | Preço: ${prod.preco} | Quantidade vendida: ${prod.quantidadeVendida}\n`; 
 
  if (prod.quantidadeVendida > 100) { 
 
    produtosMaisVendidos += `${prod.nome}\n` 
 
  } 
 
  totalPorProduto += `${prod.nome}: R$ ${totalVendidoProduto}\n`; 
 
  if (totalVendidoProduto > maisLucrativo.totalVendas) { 
 
    maisLucrativo.nome = prod.nome; 
 
    maisLucrativo.totalVendas = totalVendidoProduto; 
 
  }  
 
}) 
 
console.log('Relatório de produtos vendidos:'); 
 
console.log(relatorio); 
 
console.log('Produtos com alto volume de vendas (> 100 unidades):'); 
 
console.log(produtosMaisVendidos); 
 
console.log('Total de vendas por produto:'); 
 
console.log(totalPorProduto); 
 
console.log('Produto mais lucrativo:'); 
 
console.log(`${maisLucrativo.nome} com R$ ${maisLucrativo.totalVendas} em vendas.`);