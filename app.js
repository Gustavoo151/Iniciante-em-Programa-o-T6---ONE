//let titulo = document.querySelector('h1'); // Aqui estamos selecionando a tag que queremos alterar no código.   
//titulo.innerHTML = 'Jogo do número secreto';  // Essa frase vai ser jogada dentro do h1

//let paragrafo = document.querySelector('p'); // Aqui estamos selecionando a tag que queremos alterar no código.  
//paragrafo.innerHTML = 'Escreva um número entro 1 e 10:'; // Essa frase vai ser jogada dentro do h1

function exibirTextoNaTela(tag, texto){   // Função para exibir o texto na tela
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');

exibirTextoNaTela('p', 'Escreva um número entro 1 e 10:');

function verificarChute() {
    console.log('O botão foi clicado!');
}   