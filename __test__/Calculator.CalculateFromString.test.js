const Calculator = require('../source/Calculator');

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