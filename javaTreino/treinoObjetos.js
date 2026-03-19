const pessoa = { 

nome: "João", 

idade: 30, 

profissao: "Desenvolvedor" 

}; 


console.log("Nome:", pessoa.nome); 


pessoa.idade = 31; 

console.log("Nova idade:", pessoa.idade); 


pessoa.cidade = "São Paulo"; 

console.log("Cidade adicionada:", pessoa.cidade); 


function apresentarPessoa(p) {
  return "Olá! Meu nome é " + p.nome +
         ", tenho " + p.idade +
         " anos e sou " + p.profissao + ".";
}

console.log(apresentarPessoa(pessoa));


const pessoas = [ 

{ nome: "Ana", idade: 17 }, 

{ nome: "Carlos", idade: 22 }, 

{ nome: "Mariana", idade: 15 } 

]; 


for (let p of pessoas) { 

if (p.idade >= 18) { 

console.log(`${p.nome} é maior de idade.`); 

} 

} 


const usuario = {
  nome: "Beatriz",
  saudacao: function() {
    console.log("Olá, eu sou " + usuario.nome);
  }
};

usuario.saudacao();

for (let chave in pessoa) { 

console.log(`${chave}: ${pessoa[chave]}`); 

} 

const produto = { 

preco: 25, 

quantidade: 4 

}; 

const valorTotal = produto.preco * produto.quantidade; 

console.log(`Valor total da compra: R$${valorTotal}`); 