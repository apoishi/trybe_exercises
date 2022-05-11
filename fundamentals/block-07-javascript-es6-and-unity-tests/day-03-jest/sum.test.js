const sum = require('./sum.js');

describe('Testa a função sum', () => {
	//   item - 01
	test("Somatório de 4 + 5 é igual a 9", () => {
		expect(sum(4, 5)).toEqual(9);
	});

	// item - 02
	test("Somatório de 0 + 0 é igual a 0", () => {
		expect(sum(0, 0)).toEqual(0);
	});

	//item -03
	test('Lança um erro quando os parâmetros são 4 e "5"', () => {
		expect(() => sum(4, '5')).toThrow();
	});

	// item - 04
	test('Lança a mensagem de erro quando os parâmetros são 4 e "5"', () => {
		expect(() => sum(4, '5')).toThrow('parameters must be numbers');
	});
});
