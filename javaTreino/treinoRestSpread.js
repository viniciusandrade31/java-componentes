const usuario = { 

nome: "Lucas", 

idade: 28, 

email: "lucas@email.com" 

}; 

const { nome, idade, email } = usuario; 

console.log(nome, idade, email); 


const linguagens = ["JavaScript", "Python", "Ruby"]; 

const [ling1, ling2, ling3] = linguagens; 

console.log(ling1, ling2, ling3); 

 

function somarTudo(...numeros) {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }

  return soma;
}

console.log(somarTudo(1, 2, 3, 4)); // 10



