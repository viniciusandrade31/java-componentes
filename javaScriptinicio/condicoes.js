const nome = 'Vinícius'

if (nome) {
    console.log('Óla, ', nome)
} else {
    console.log('Ainda não sei o seu nome')
}

const idade = 24

if (idade != null) {
    if ( idade >= 18) {
        console.log('Maior de idade')
    } else if (idade >= 0 && idade < 18) {
        console.log('Menor de idade')
    }
}