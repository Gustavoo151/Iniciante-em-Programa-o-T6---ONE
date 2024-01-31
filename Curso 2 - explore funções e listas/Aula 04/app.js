let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

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

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

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

//Desafios
//1- Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura,
//em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaImc(altura, peso){
    return peso / (altura * altura);
}

//2- Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(numero){
    if (numero == 0 || numero == 1){
        return 1;
    }
    else{
        return numero * fatorial(numero - 1);
    }
}

//3- Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente
//em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function convertDolarToReal(valueDolar){
    return valueDolar * 4.80;
}

//4- Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e 
//largura que serão dadas como parâmetro.
function calculaAreaPerimetro(altura, largura){
    let area = altura * largura;
    let perimetro = (altura * 2) + (largura * 2);

    console.log(`Área: ${area}`);
    console.log(`Perímetro: ${perimetro}`);
}

//5- Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que 
//será fornecido como parâmetro. Considere Pi = 3,14.
function calcularArearCirculo(raio){
    return 3.14 * (raio * raio);
}

//6- Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostraTabuada(numero){
    let i = 1
    for(i; i <= 10; i++){
        console.log(`${i} * ${numero} = ${(i * numero)}`);
    }
}