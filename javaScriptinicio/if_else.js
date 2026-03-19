let idade = 22;

idade >= 18 ? console.log('Pode comprar bebida.') : console.log('Não pode comprar bebida.')

let horaAtual = 10

if (horaAtual >= 12 && horaAtual < 18) {
    console.log('Boa tarde')
} else if (horaAtual >= 6 && horaAtual < 12) {
    console.log('Bom dia') 
} else {
    console.log('Boa noite')
}

const numeroQualquer = 0

if (numeroQualquer > 0) {
    console.log('Número positivo')
} else if (numeroQualquer < 0) {
    console.log('Número negativo')
} else {
    console.log('O número é zero')
}

const notaDoAluno = 7

if (notaDoAluno >= 9) {
    console.log('Nota A')
} else if (notaDoAluno >= 8) {
    console.log('Nota B')
} else if (notaDoAluno >= 6) {
    console.log('Nota C')
} else if (notaDoAluno >= 4) {
    console.log('Nota D')
} else {
    console.log('Nota E')
}

const parOuImpar = -3

parOuImpar % 2 == 0 ? console.log('O número é par') : console.log('O número é impar')

const menuCaso = 3

switch(menuCaso){
    case 1:
        console.log('Cadastrar')
        break
    case 2:
        console.log('Listar')
        break
    case 3:
        console.log('Sair')
        break
}

const emailCadastro = 'andradevinicius786@gmail.com'

emailCadastro == '' ? console.log("Preencha o campo do e-mail.") : console.log('E-mail válido: ', emailCadastro)

let senha = 'abc123'
let senhaValida = true;

if (senhaValida) {
    console.log('Senha válida')
} else {
    console.log('Senha muito curta')
}

let saldoDisponivel = 100
let valorCompra = 80

if (saldoDisponivel >= valorCompra) {
    console.log('Compra aprovada')
} else {
    console.log('Saldo insuficiente')
}

let nomeFormulario = 'Ana'
let emailFormulario = 'ana@email.com'
let idadeFormulario = 25
let formularioValido = true

if (formularioValido) {
    console.log('Formulário enviado com sucesso')
} else {
    console.log('Por favor, preencha todos os campos corretamente')
}