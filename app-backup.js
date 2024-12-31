let numeroMax = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirNaTela('h1', 'Jogo do Número Secreto');
    exibirNaTela('p', `escolha um número entre 1 e ${numeroMax}`);
}

function exibirNaTela(tag, texto){
    let exibir = document.querySelector(tag);
    exibir.innerHTML = texto;
}

function verificarChute(){
    let chute = document.querySelector('.container__input').value;
    
    if (chute == numeroSecreto){
        exibirNaTela('h1', 'Parabéns você acertou.');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `você descobriu o número secreto, depois de ${tentativas} ${palavraTentativa}`;

        exibirNaTela('p', mensagem);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirNaTela('p', 'o número secreto é menor.');
        }else{
            exibirNaTela('p', 'o número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    } 
}

function limparCampo(){
    let chute = document.querySelector('.container__input');
    chute.value = '';
}

function gerarNumeroAleatorio(){
    return Math.round(Math.random() * numeroMax + 1);
}

function reiniciarJogo(){
    exibirMensagemInicial();
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}