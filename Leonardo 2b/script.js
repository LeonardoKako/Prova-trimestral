const calcular = document.getElementById('calcular');
const deletar = document.getElementById('limpar');

function imc () {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (altura !== '' && peso !== '') {

        const valorIMC = (peso/(altura**2)).toFixed(2);

        resultado.textContent = `---------------- Opa Battistella, seu IMC é ${valorIMC}.---------------`;

    }

}

function limpa() {
    document.getElementById('altura').value = "";
    document.getElementById('peso').value = "";
}

calcular.addEventListener('click', imc);