function soma() {
    var numero01 = parseFloat(document.getElementById("number1").value);
    var numero02 = parseFloat(document.getElementById("number2").value);
    var resposta = document.getElementById("respSoma");
    resposta.textContent = numero01 + numero02;
}

function subtracao() {
    var numero01 = parseFloat(document.getElementById("sub1").value);
    var numero02 = parseFloat(document.getElementById("sub2").value);
    var resposta = document.getElementById("respSub");
    resposta.textContent = numero01 - numero02;
}

function divisao() {
    var numero01 = parseFloat(document.getElementById("div1").value);
    var numero02 = parseFloat(document.getElementById("div2").value);
    var resposta = document.getElementById("respDiv");
    resposta.textContent = numero01 / numero02;
}

function multiplicacao() {
    var numero01 = parseFloat(document.getElementById("mult1").value);
    var numero02 = parseFloat(document.getElementById("mult2").value);
    var resposta = document.getElementById("respMult");
    resposta.textContent = numero01 * numero02;
}