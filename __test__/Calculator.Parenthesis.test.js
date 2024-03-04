const Calculator = require('../source/Calculator');

test('split (((9+2)) into 9+2 2,6', () => {
    calc = new Calculator();
    expect(calc.getParenthesisContent("(((9+2))")).toEqual({
        content: "9+2",
            opening: 2, 
            closing: 6
    });
});

test('split 16/1 into 16/1 0, 4', () => {
    calc = new Calculator();
    expect(calc.getParenthesisContent("16/1")).toEqual({
        content: "16/1",
            opening: -1, 
            closing: 4
    });
});