let peso = Number(prompt("Digite o seu peso em kg (ex: 70.5):"));
let altura = Number(prompt("Digite a sua altura em metros (ex: 1.75):"));

if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
    let imc = peso / (altura ** 2);
    let imcFormatado = imc.toFixed(1);
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Ta só o chassi de grilo";
    } 
    else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Tá Suave";
    } 
    else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Ta cheinho";
    } 
    else if (imc >= 30) {
        classificacao = "Oloco baleião";
    }
    alert(`Seu IMC é ${imcFormatado}. Classificação: ${classificacao}`);
} else {
    alert("Valores inválidos. Lembre de usar apenas números e ponto no lugar da vírgula(ex: 1.75).");
}