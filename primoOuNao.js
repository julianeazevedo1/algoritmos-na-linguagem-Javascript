// primo.js
function primo(n) {
  if (n <= 1) return false; // Números menores ou iguais a 1 não são primos
  if (n === 2) return true; // O número 2 é primo

  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
          return false; // Se encontrar um divisor, não é primo
      }
  }

  return true; // Se não encontrar divisores, o número é primo
}

module.exports = primo; // Exporta a função para ser usada em outros arquivos
  
  
  