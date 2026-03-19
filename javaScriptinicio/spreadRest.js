let carla1 = {
    nome: 'Carla',
    idade: '21',
    profissao: 'Medica'
}

const carla2 = {...carla1}
carla2.idade =23

console.log(carla1)
console.log(carla2)

carla1 = {
    ...carla2,
    profissao: 'Doutoura',
    possuiCNH: false
}

console.log(carla1)

const { nome, ...restante } = carla1

console.log(nome)
console.log(restante)