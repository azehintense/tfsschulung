const Calculator = require('../source/Calculator');

test('split 487', () => {
    calc = new Calculator();
    expect(calc.seperateByOperator("487")).toEqual(["487"]);
});

test('split 4 + 2 * 5 to 4 + and 2 * 5', () => {
    calc = new Calculator();
    expect(calc.seperateByOperator("4 + 2 * 5", "+")).toEqual(["4", "2 * 5"]);
});

test('split 8 * 3 + 2 + 5 to 8 * 3, 2, 5', () => {
    calc = new Calculator();
    expect(calc.seperateByOperator("8 * 3 + 2 + 5", "+")).toEqual(["8 * 3", "2", "5"]);
});