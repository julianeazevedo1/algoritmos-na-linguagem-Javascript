// __tests__/contarInteiros.test.js
const contarInteiros = require('./contagem');

test('conta inteiros entre 1 e 10', () => {
    const conjunto = [1, 5, 7, 10, 20, 30];
    const N = 10;
    const total = contarInteiros(conjunto, N);
    expect(total).toBe(4); // Espera-se que 4 números estejam entre 1 e 10
});

test('conjunto vazio retorna 0', () => {
    const conjunto = [];
    const N = 10;
    const total = contarInteiros(conjunto, N);
    expect(total).toBe(0); // Espera-se que o total seja 0 para um conjunto vazio
});

