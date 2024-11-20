// __tests__/fibonacci.test.js
const fibonacci = require('./fibonacci');

test('retorna o 10º número de Fibonacci', () => {
    expect(fibonacci(10)).toBe(55);
});

test('retorna 0 para n = 0', () => {
    expect(fibonacci(0)).toBe(0);
});

