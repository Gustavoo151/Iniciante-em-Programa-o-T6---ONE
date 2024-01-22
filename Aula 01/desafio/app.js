//1- Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

//2- Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function mostraConsole(){
    console.log('O botão foi clicado');
}

//3- Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function mostrarAlerta(){
    alert("Eu amo JS");
}
//4- Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil.
//Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function mostarPrompt(){
    let cidade = prompt('Digite o nome de uma cidade:');

    alert(`Estive em ${cidade} e lembrei de você`);
}

//5- Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function fazerSoma(){
    let valor1 = prompt('Digite o valor 1:');
    let valor2 = prompt('Digite o valor 2:');

    let soma = parseInt(valor1) + parseInt(valor2);

    alert(`A soma de ${valor1} + ${valor2} é ${soma}`);
}
