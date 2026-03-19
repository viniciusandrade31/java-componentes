const pessoa = {
    nome: 'Carla',
    idade: 23,
    profissao: 'Estudante'
}

//console.log(pessoa.nome)
//console.log(pessoa.idade)

const{nome, idade } = pessoa

console.log(nome)
console.log(idade)

function saudacao({ nome, idade }){
    console.log('Olá', nome)
    if (idade >= 18) {
        console.log('Maior de idade')
    } else{
        console.log('Menor de idade')
    }
}
saudacao(pessoa)

const frutas = ['uva', 'banana']

console.log(frutas)