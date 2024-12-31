let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerandoNumeroSecreto();
let tentativa = 1;

exibirMensagemInicial();

function exibirMensagemInicial(){
    exibirMensagem('h1', 'Jogo do Número Secreto.');
    exibirMensagem('p', `escolha um número entre 1 e ${numeroMaximo}`);
}

function exibirMensagem(tag, texto){
    document.querySelector(tag).innerHTML = texto;
}

function gerandoNumeroSecreto(){
    let numeroEscolhido = Math.round(Math.random() * numeroMaximo) + 1;
    let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerandoNumeroSecreto();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function verificarChute(){
    let chute = document.querySelector('.container__input').value;
    let exibirTentativas = tentativa > 1 ? 'tentativas' : 'tentativa';

    if(chute == numeroSecreto){
        exibirMensagem('h1', 'Você Ganhou');
        exibirMensagem('p', `parabéns você acertou o número secreto, depois de ${tentativa} ${exibirTentativas}`);

        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirMensagem('p', 'o número secreto é menor.');
        }else{
            exibirMensagem('p', 'o número secreto é maior.');
        }
        limparCampo();
        tentativa++;
    }
}

function limparCampo(){
    let chute = document.querySelector('.container__input');
    chute.value = '';
}

function novoGame(){
    tentativa = 1;
    numeroSecreto = gerandoNumeroSecreto();
    limparCampo();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    exibirMensagemInicial();
}