let listaNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    verificaTamanhoLista();

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }
    else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = numeroSecreto > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o valor secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');   
    }
    else{
        exibirTextoNaTela('h1', 'Errou!');
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'Digite um valor menor.');
        }
        else{
            exibirTextoNaTela('p', 'Digite um valor maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function verificaTamanhoLista(){
    if (listaNumerosSorteados.length == 10){
        listaNumerosSorteados = [];
    }
}

exibirMensagemInicial();


//Desafios
//1- Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//2- Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos:
// 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3- Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');

//4- Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaNome = ['Gustavo', 'josé', 'Oliveira'];
console.log(listaNome[0]);

//5- Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log(listaNome[1]);

//6- Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
console.log(listaNome[listaNome.length - 1]);