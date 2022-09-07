
const divisaoResultados = document.querySelector('.blocoNumeros');



function generateDice() {
    const ladosDado = document.getElementById('ladosDado').value;
    const nDados = document.getElementById('nDados').value;

    let resultHtml = "";   

    for (let i = 0; i < nDados; i++) {              
        resultHtml += "<div class='apresentaDados'><p>" + String(Math.floor(Math.random() * ladosDado) + 1) + "</p></div>";        
    }

    console.log(resultHtml);

    divisaoResultados.innerHTML = resultHtml;
}

document.querySelector('.play').onclick = generateDice;

