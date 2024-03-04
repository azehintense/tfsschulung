const Calculator = require('../source/Calculator');

test('does 1 + 2 to equal 3', () => {
    calc = new Calculator();
    expect(calc.add(1, 2)).toBe(3);
});

test('does 2 + 4 to equal 6', () => {
    calc = new Calculator();
    expect(calc.add(2, 4)).toBe(6);
});

test('does 5 - 3 to equal 2', () => {
    calc = new Calculator();
    expect(calc.subtract(5, 3)).toBe(2);
});

test('does 1 - 7 to equal -6', () => {
    calc = new Calculator();
    expect(calc.subtract(1, 7)).toBe(-6);
});

test('does 4 * 3 to equal 12', () => {
    calc = new Calculator();
    expect(calc.multiply(4, 3)).toBe(12);
});

test('does 4 ^ 3 to equal 64', () => {
    calc = new Calculator();
    expect(calc.exponentiate(4, 3)).toBe(64);
});

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

test('split (4 + 3) * 2 to 4 + 3, * 2', () => {
    calc = new Calculator();
    expect(calc.seperateByParenthesis("(4 + 3) * 2")).toEqual(["4 + 3", "* 2"]);
});

test('calculate from string: 77', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("77")).toBe(77);
});

test('calculate from string: 4 + 2 = 6', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("4 + 2")).toBe(6);
});

test('calculate from string: 4 * 3 + 2 = 14', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("4 * 3 + 2")).toBe(14);
});

test('calculate from string: 3 * 2 - 1 = 5', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("3 * 2 - 1")).toBe(5);
});

test('calculate from string: 40 - 50 = -10', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("40 - 50")).toBe(-10);
});

test('calculate from string: 40 - 50 * 2 = -60', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("40 - 50 * 2")).toBe(-60);
});

test('calculate from string: (20 - 4 * 3) - 8 = 0', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("(20 - 4 * 3) - 8")).toBe(0);
});

test('calculate from string: 3 * (2 - 3) = -3', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("3 * (2 - 3)")).toBe(-3);
});

test('calculate from string: 5^3 = 125', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("5^3")).toBe(125);
});

test('calculate from string: 56 / 7 = 8', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("56 / 7")).toBe(8);
});

test('calculate from string: 5 ^ 3 * 2 - 1 = 249', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("5 ^ 3 * 2 - 1")).toBe(249);
});

test('calculate from string: 16^3 = 4096', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("16^3")).toBe(4096);
});

test('calculate from string: (14+2)^3 * 9 = 36864', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("(14+2)^3 * 9")).toBe(36864);
});

test('calculate from string: (14+2)^3 * 9 + 40 = 36904', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("(14+2)^3 * 9 + 40")).toBe(36904);
});

test('calculate from string: (14+2)^3 * 9 + 40 - 1 = 36903', () => {
    calc = new Calculator();
    expect(calc.calculateFromString("(14+2)^3 * 9 + 40 - 1")).toBe(36903);
});