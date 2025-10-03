function calcularImc() {
    //Entrada de dados
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value)/100;

    // Validação
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
        return;
    }

    //Processamento
    let imc = peso / (altura * altura);
    let resultado = imc.toFixed(2);

    // Classificação do IMC
    let classificacao;
    if (imc < 18.5) {
        classificacao = " Abaixo do peso, procure um médico";
    } else if (imc < 25) {
        classificacao = " Peso normal";
    } else if (imc < 30) {
        classificacao = " Sobrepeso, procure um médico";
    } else {
        classificacao = " Obesidade, procure um médico";
    }

    //Saída
    document.getElementById("resultado").textContent = "Seu IMC é: " + resultado + classificacao;
}