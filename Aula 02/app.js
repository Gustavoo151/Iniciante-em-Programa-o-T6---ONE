alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 9;
console.log(numeroSecreto);
let chute;
let numeroTentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${numeroTentativas} tentivas.`);
    } else {
        if (numeroSecreto > chute){
            alert(`O número secreto é maior que o ${chute}!`); 
        }
        else{
            alert(`O número secreto é menor que o ${chute}!`);
        }
    }
    numeroTentativas++;
}
