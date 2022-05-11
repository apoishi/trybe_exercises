const myRemove = require('./myRemove.js');

	describe('Testa a função myRemove', () => {
		test('Retorna um array com o item removido', () => {
			expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
			expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
			expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
		});
	});
