
const paragrafo = document.querySelector('p');



function generateDice() {
    const ladosDado = document.getElementById('ladosDado').value;
    const nDados = document.getElementById('nDados').value;

    let result = "Numeros = ";
   

    for (let i = 0; i < nDados; i++) {
        
           
        result += " | " + String(Math.floor(Math.random() * ladosDado) + 1);

        if(i===(nDados-1)){
            result+= " | ";
        }
    }

    console.log(result);
    paragrafo.textContent = result;
}

document.querySelector('.play').onclick = generateDice;

