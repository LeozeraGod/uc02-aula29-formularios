const formulario = document.getElementById("form");


// adiciona o evento para manipular o formulario ao botao cadastrado 
const btnCadastrar = document.getElementById("btnCadastrar")

const inputNome = document.getElementById("name")
const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("password")

const listaPessoa = []

function cadastrar(event) {
    event.preventDefault()
    
    const nome = inputNome.value
    const email = inputEmail.value
    const senha = inputSenha.value

    // Validação, verificando se os campos tem conteúdo 

    if (!(nome.trim())) {
        alert("Informe seu nome")
        inputNome.focus
        return

    }

    if (!(email.trim())) {
        alert("Informe seu email")
        inputEmail.focus
        return
    }
    if (!(senha.trim())) {
        alert("Informe sua senha")
        inputSenha.focus
        return
    }
    // Caso os dados estejam válidos, procura na lista 
    // Se ja existe um cadastro com o mesmo email 

    // fo/each e fazer a comparação 

    let pessoaEncontrada = null

    for (pessoa of listaPessoas) {
        if (pessoa.email === email.toLowerCase()) {
            pessoaEncontrada = pessoa
            break

        }
    }


// Caso não exista, adiciona um array 
    console.log({
      nome: nome,
      email: email,
      senha: senha
    })
  }
  
  const cadastrarAnonimo = (event) => {
    console.log(event)
  }
  
  btnCadastrar.addEventListener('click', cadastrar)

