function somatorio(numeros) {
    let soma = 0; // Inicializa a soma

    for (let numero of numeros) {
        soma += numero; // Adiciona cada número à soma
    }

    return soma; // Retorna o resultado final
}

// Exemplo de uso
const numeros = [1, 3]; // Conjunto de números
const resultado = somatorio(numeros); // Chama a função
console.log("A soma dos números é: " + resultado); // Exibe o resultado
module.exports = somatorio;