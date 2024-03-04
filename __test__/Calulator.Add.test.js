const Calculator = require('../source/Calculator');

test('does 1 + 2 to equal 3', () => {
    calc = new Calculator();
    expect(calc.add(1, 2)).toBe(3);
});

test('does 2 + 4 to equal 6', () => {
    calc = new Calculator();
    expect(calc.add(2, 4)).toBe(6);
});