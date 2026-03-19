//const listaDeNomes = [
//    'Ana',
//    'Paula',
//    'Carla',
//    'Luiza',
//    'Vinícius'
//]

//console.log(listaDeNomes)

const frutas = ['Banana', 'Morango', 'Kiwi', 'Maça', 'Mixirica']
//// Banana = 0
//// Mixirica = 4

console.log(frutas)

//console.log('Primeira fruta:', frutas[0])
//console.log('Útima fruta:', frutas[4])

//console.log ('trotal de frutas', frutas.length)

//frutas.push('Melancia')

//console.log('Total de frutas depois de adicionar melancia:', frutas.length)
//console.log('Última fruta:', frutas[frutas.length -1 ])

frutas.splice(2, 1)

console.log('Depois de remover', frutas)

for(let i = 0; i < frutas.length; i++){
    console.log('índice: ', i)
    console.log(frutas[i])
}

console.log('Usando forEache:')

frutas.forEach((valor, indice) => {
    console.log('índice:', indice, valor)
})

for (const fruta of frutas) {
    console.log('fruta da vez:', fruta)

}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})
const numerosImpares = numeros.filter((numero) => {
    return numero % 2 !== 0
})
console.log('Todos os números:', numeros)
console.log('Todos os números pares:', numerosPares)
console.log('Todos os números ímpares', numerosImpares)

const numerosDobrados = numeros.map((numero) => {
    return numero * 2
})

console.log('Nossa lista mapeada', numerosDobrados)