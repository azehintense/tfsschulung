const Calculator = require('../source/Calculator');

test('does 4 * 3 to equal 12', () => {
    calc = new Calculator();
    expect(calc.multiply(4, 3)).toBe(12);
});