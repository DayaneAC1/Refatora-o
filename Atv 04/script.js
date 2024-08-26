function calcular(){
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var resposta = document.getElementById("respImc")
    resposta.textContent = (peso / (altura * altura)).toFixed(2)
}