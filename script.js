function calcularTabuada() {
    let numero = prompt("Digite um número para calcular a tabuada (de 1 a 20):")

    let resultados = ""
    for (let i = 1; i <= 20; i++) {
        resultados += `${numero} x ${i} = ${numero * i}\n`
    }
    alert(resultados)
}