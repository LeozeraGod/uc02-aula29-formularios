const formulario = document.getElementById("form")


// adiciona o evento para manipular o formulario ao botao cadastrado 
const btnCadastrar = document.getElementById("btnCadastrar")
const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("senha")

function cadastrar(event) {
event.preventDefault()

const nome = inputNome.value
const email = inputEmail.value
const senha = inputSenha.value

console.log ({
    nome : nome,
    email: email, 
    senha: senha
})

}

const cadastrarAnonimo = (event) => {
    console.log(event)
}

btnCadastrar.addEventListener('click', cadastrar )

