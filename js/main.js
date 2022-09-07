
const divisaoResultados = document.querySelector('.blocoNumeros');
const atalhos = document.querySelectorAll(".atalhos li");
const ladosDado = document.getElementById('ladosDado');
const nDados = document.getElementById('nDados');

for (let i = 0; i < atalhos.length; i++) {
    atalhos[i].onclick = function () {
        const textoAtalho = atalhos[i].textContent
        textoAtalho.substring(1);
    }
}

function generateDice() {   
    let resultHtml = "";
    for (let i = 0; i < nDados.value; i++) {
        resultHtml += "<div class='apresentaDados'><p>" + String(Math.floor(Math.random() * ladosDado.value) + 1) + "</p></div>";
    }
    console.log(resultHtml);
    divisaoResultados.innerHTML = resultHtml;
}

document.querySelector('.play').onclick = generateDice;


