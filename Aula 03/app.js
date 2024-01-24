let numeroScreto = geraNumeroAleatorio();

console.log(numeroScreto);

function exibirTextoNaTela(tag, texto){   // Função para exibir o texto na tela
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');

exibirTextoNaTela('p', 'Escreva um número entre 1 e 10:');

function verificarChute() {
    let chute = document.querySelector('input').value;

    console.log(chute == numeroScreto)
    console.log('O botão foi clicado!');
}   

function geraNumeroAleatorio(){
    return  parseInt(Math.random(10) * 10 + 1);
}


// Desafios 
//Criar uma função que exibe "Olá, mundo!" no console.
function helloWorld(){
    console.log("Ola, Mundo!");
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function saudacao(nome){
    console.log(`Olá, ${nome}`);
}

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calculaPorDois(numero){
    numero = parseInt(numero)
    return numero * 2;
}

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calculaMedia(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;
}

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornaMaior(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function calculaQuadrado(numero){
    return numero * numero;
}
