/**
 * Função que ordena um array de números em ordem crescente.
 * @param {number[]} array - O array de números a ser ordenado.
 * @returns {number[]} - O array ordenado em ordem crescente.
 */
function ordenar(array) {
    if (!Array.isArray(array)) {
      throw new Error("A entrada deve ser um array.");
    }
    return array.sort((a, b) => a - b);
  }
  
  module.exports = ordenar;
  