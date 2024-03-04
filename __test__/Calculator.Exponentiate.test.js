const Calculator = require('../source/Calculator');

test('does 4 ^ 3 to equal 64', () => {
    calc = new Calculator();
    expect(calc.exponentiate(4, 3)).toBe(64);
});
