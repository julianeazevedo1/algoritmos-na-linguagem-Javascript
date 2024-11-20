const ordenar = require('./ordenacao');

describe("Testes para a função ordenar", () => {
  test("Deve ordenar o array [3, 1, 2] para [1, 2, 3]", () => {
    const resultado = ordenar([3, 1, 2]);
    expect(resultado).toEqual([1, 2, 3]);
  });

  test("Deve retornar o mesmo array quando já estiver ordenado", () => {
    const resultado = ordenar([1, 2, 3]);
    expect(resultado).toEqual([1, 2, 3]);
  });

  test("Deve retornar um array vazio quando a entrada for um array vazio", () => {
    const resultado = ordenar([]);
    expect(resultado).toEqual([]);
  });

  
});
