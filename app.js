alert('Bem-vindo ao jogo do Número Secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() *numeroMaximo + 1);
let chute
let tentativas = 1;

//enquento chute for diferente do numero secreto
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número de 1 à ${numeroMaximo}`);

    //se chute for igual a numero secreto
    if (chute == numeroSecreto) {
        break;
        
    } else {
        if (chute> numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa
}`);

//if (tentativas > 1){
//    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}
//else{
//    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}
