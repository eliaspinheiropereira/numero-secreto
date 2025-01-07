// variaveis
let listaDeNumerosSorteados = [];
let numeroMaximo = 50;
let numeroSecreto = numeroAleatorio();
let tentativa = 1;

console.log(numeroSecreto);

// funcções
function exibirMensagemInicial(){
    exibirMensagem('h1', 'Jogo do Adivinha');
    exibirMensagem('p', `escolha um número entre 1 e ${numeroMaximo}`);
}

function exibirMensagem(tag, mensagem){
    document.querySelector(tag).innerHTML = mensagem;
}

function numeroAleatorio(){
    let numeroEscolhido = Math.floor(Math.random() * (numeroMaximo - 1 + 1)) + 1;
    let qtdeElementosNaLista = listaDeNumerosSorteados.length;

    if(qtdeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

    return numero;
}

function verificaChute(){
    let chute = document.querySelector('input').value;
    let exibirTentativas = tentativa > 1 ? 'tentativas' : 'tentativa';
    
    if(chute == numeroSecreto){
        exibirMensagem('h1', 'Parabéns');
        exibirMensagem('p', `você acertou o número secreto em ${tentativa} ${exibirTentativas}`);

        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirMensagem('p', 'tente um número menor');
        }else{
            exibirMensagem('p', 'tente um número maior');
        }

        tentativa++;
    }
}

function limparCampo(){
    let chute = document.querySelector('input').value = '';
}

function novoGame(){
    tentativa = 1;
    numeroSecreto = numeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
// chamando funções
exibirMensagemInicial();
