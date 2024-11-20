function fibonacci(n) {
    if (n <= 1) return n; // Caso base, retorna n (0 ou 1)

    let a = 0, b = 1;
    
    for (let i = 2; i <= n; i++) {
        let temp = a + b; // Soma dos dois últimos números
        a = b; // Atualiza a para o valor atual de b
        b = temp; // Atualiza b para o novo valor
    }

    return b; // Retorna o n-ésimo número da sequência
}

console.log(fibonacci(10)); // Exemplo: Fibonacci do número 10
module.exports = fibonacci;