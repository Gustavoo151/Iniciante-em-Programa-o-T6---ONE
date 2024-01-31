function exibirTextoNaTela(tag, texto){   // Função para exibir o texto na tela
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');

exibirTextoNaTela('p', 'Escreva um número entre 1 e 10:');

function verificarChute() {
    console.log('O botão foi clicado!');
}   