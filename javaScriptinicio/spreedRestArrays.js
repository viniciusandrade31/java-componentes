const frutas = ['Maçã', 'Banana', 'Goiaba']

const maisFrutas = ['Uva', 'Morango', 'Kiwi']

const clone = [...frutas]

const todasAsFrutas = [...frutas, ...maisFrutas]

frutas.push('Pitanga')

console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasAsFrutas)

const [primeira, segunda, ...restante] = todasAsFrutas

console.log(primeira)
console.log(segunda)
console.log(restante)