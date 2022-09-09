
const divisaoResultados = document.querySelector('.blocoNumeros');
const atalhos = document.querySelectorAll(".atalhos li");
const ladosDado = document.getElementById('ladosDado');
const nDados = document.getElementById('nDados');
const botaoOrdenar = document.querySelector("#ordernarButton");
const botaoNumUnicos = document.querySelector("#numUnicosButton");
const somaDiv = document.querySelector('.soma');

let arrayNumeros = [];
let arrayNumerosAgrupados = [];


// 

for (let i = 0; i < atalhos.length; i++) {
    atalhos[i].onclick = function () {
        const textoAtalho = atalhos[i].textContent
        ladosDado.value = textoAtalho.substring(1);
    }
}

// 

document.querySelector('.play').onclick = generateDice;

botaoNumUnicos.onclick = function() {
    ordernamento(arrayNumeros);
    const arrayElementosUnicos = elementosUnicos(arrayNumeros);
    publicar(arrayElementosUnicos);
}

botaoOrdenar.onclick = function () {
    if (arrayNumeros == 0) {
        
        divisaoResultados.innerHTML = "<p>Sem numeros!</p>";
    } else {
        ordernamento(arrayNumeros);
        publicar(arrayNumeros);
    }
}



// Funções

function generateDice() {
    arrayNumeros = [];
    let resultHtml = "";
    for (let i = 0; i < nDados.value; i++) {
        const RandNumero = Math.floor(Math.random() * ladosDado.value) + 1;
        arrayNumeros.push(RandNumero);
        resultHtml += padraoTexto(RandNumero);
    }

    turnOnSoma(arrayNumeros);

    divisaoResultados.innerHTML = resultHtml;
}

function publicar(conteudo) {

    let textoPublicar = "";

    for (let i = 0; i < conteudo.length; i++) {
        const element = conteudo[i];
        textoPublicar += padraoTexto(element);

    }
    divisaoResultados.innerHTML = textoPublicar;

    return 0;

}

function ordernamento(listaNumeros) {
    listaNumeros.sort(function (a, b) {
        return a - b; //  ***
    });
}

function padraoTexto(texto) {

    return `<div class='apresentaDados'><p>${String(texto)}</p></div>`;
}

function turnOnSoma(numeroDiv) {
    let soma = 0;
    for (let i = 0; i < numeroDiv.length; i++) {
        soma += numeroDiv[i];
    }
    somaDiv.innerHTML = `<p> ${soma} </p>`;
    somaDiv.classList.add('soma-ativada');
}

/*
function contaElementosArray (array,Numero) {
let num = array.lastIndexOf(Numero)-array.indexOf(Numero)+1;
    console.log(num);
}

function unique(value, index, self) { 
    return self.indexOf(value) === index;
}


console.log(unique);

*/
function agrupar (numeros) {
    saidaDeDados = [];
    numeros = ordernamento(numeros);
    
}

function elementosUnicos (array){

    return array.filter(unique);
}

function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
