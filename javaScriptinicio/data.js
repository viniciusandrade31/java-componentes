const agora = new Date()

console.log(agora)
console.log('Ano:', agora.getFullYear())
console.log('Mês 0-11:', agora.getMonth())
console.log('Dia do mês:', agora.getDate())
console.log('Hora:', agora.getHours())
console.log('Minutos:', agora.getMinutes())

const nascimento = new Date('2002-02-08')

console.log(nascimento)

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR'))
console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US'))