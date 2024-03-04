const Calculator = require('../source/Calculator');

test('extract 4 + 3 from (4 + 3) * 2', () => {
    calc = new Calculator();
    expect(calc.getParenthesisContent("(4 + 3) * 2")).toEqual({
        content: "4 + 3",
        opening: 0,
        closing: 6
    });
});

test('extract 4 + 3 from 7 + ((4 + 3) * 2) + 4', () => {
    calc = new Calculator();
    expect(calc.getParenthesisContent("7 + ((4 + 3) * 2) + 4")).toEqual({
        content: "4 + 3",
        opening: 5,
        closing: 11
    });
});