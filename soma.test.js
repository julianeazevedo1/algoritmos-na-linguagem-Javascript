const somatorio = require('./soma'); // Importa a função do arquivo correspondente

describe('Testes para a função somatorio', () => {
    test('Deve retornar 3 quando o array é [1, 2]', () => {
        const numeros = [1, 2];
        const resultado = somatorio(numeros);
        expect(resultado).toBe(3);
    });

    test('Deve retornar 0 para um array vazio', () => {
        const numeros = [];
        const resultado = somatorio(numeros);
        expect(resultado).toBe(0);
    });

});
