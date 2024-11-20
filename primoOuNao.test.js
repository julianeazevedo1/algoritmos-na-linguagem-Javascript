// __tests__/primo.test.js
const primo = require('./primoOuNao'); // Importe a função primo

test('verifica se 1 não é primo', () => {
    expect(primo(1)).toBe(false);
});

test('verifica se 2 é primo', () => {
    expect(primo(2)).toBe(true);
});

