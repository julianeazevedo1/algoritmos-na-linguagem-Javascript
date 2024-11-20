// __tests__/mdc.test.js
const mdc = require('./maximoDivisor'); // Importe a função mdc

test('MDC de 48 e 18 é 6', () => {
    expect(mdc(48, 18)).toBe(6);
});

test('MDC de 56 e 98 é 14', () => {
    expect(mdc(56, 98)).toBe(14);
});
