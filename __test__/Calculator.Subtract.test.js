const Calculator = require('../source/Calculator');

test('does 5 - 3 to equal 2', () => {
    calc = new Calculator();
    expect(calc.subtract(5, 3)).toBe(2);
});

test('does 1 - 7 to equal -6', () => {
    calc = new Calculator();
    expect(calc.subtract(1, 7)).toBe(-6);
});