// Um objeto é uma estrutura que agrupa dados relacionados em formato de pares: cahve e valor

// const nome = 'Calor'
// const idade = 25
// const temCarteira = true

let pessoa = {
    nome: 'Carol',
    idade: 25,
    temCarteira: true
}
pessoa.sobrenome = 'Andrade'
pessoa.idade = 26

console.log(pessoa)
console.log(pessoa.sobrenome)

const livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolken',
    paginas: 310
}

livro.publicado = true
livro.idiomas = [
    'Ingles', 'Portugues', 'Espenhol'
]

livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log('Livro antes', livro)
delete livro.paginas

console.log('Livro depois', livro)

console.log('Autor do livro', livro['autor'])