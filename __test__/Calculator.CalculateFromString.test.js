const Calculator = require('../source/Calculator');

test('calculate from string: 77', () => {
    //Arrange
    calc = new Calculator();
    let expected = 77;

    //Act
    let result = calc.calculateFromString("77");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: 4 + 2 = 6', () => {
    //Arrange
    calc = new Calculator();
    let expected = 6;

    //Act
    let result = calc.calculateFromString("4 + 2");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: 4 * 3 + 2 = 14', () => {
    //Arrange
    calc = new Calculator();
    let expected = 14;

    //Act
    let result = calc.calculateFromString("4 * 3 + 2");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: 3 * 2 - 1 = 5', () => {
    //Arrange
    calc = new Calculator();
    let expected = 5;

    //Act
    let result = calc.calculateFromString("3 * 2 - 1");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: 40 - 50 = -10', () => {
    //Arrange
    calc = new Calculator();
    let expected = -10;

    //Act
    let result = calc.calculateFromString("40 - 50");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: 40 - 50 * 2 = -60', () => {
    //Arrange
    calc = new Calculator();
    let expected = -60;

    //Act
    let result = calc.calculateFromString("40 - 50 * 2");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: (20 - 4 * 3) - 8 = 0', () => {
    //Arrange
    calc = new Calculator();
    let expected = 0;

    //Act
    let result = calc.calculateFromString("(20 - 4 * 3) - 8");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: 3 * (2 - 3) = -3', () => {
    //Arrange
    calc = new Calculator();
    let expected = -3;

    //Act
    let result = calc.calculateFromString("3 * (2 - 3)");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: 5^3 = 125', () => {
    //Arrange
    calc = new Calculator();
    let expected = 125;

    //Act
    let result = calc.calculateFromString("5^3");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: 56 / 7 = 8', () => {
    //Arrange
    calc = new Calculator();
    let expected = 8;

    //Act
    let result = calc.calculateFromString("56 / 7");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: 5 ^ 3 * 2 - 1 = 249', () => {
    //Arrange
    calc = new Calculator();
    let expected = 249;

    //Act
    let result = calc.calculateFromString("5 ^ 3 * 2 - 1");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: 16^3 = 4096', () => {
    //Arrange
    calc = new Calculator();
    let expected = 4096;

    //Act
    let result = calc.calculateFromString("16^3");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: (14+2)^3 * 9 = 36864', () => {
    //Arrange
    calc = new Calculator();
    let expected = 36864;

    //Act
    let result = calc.calculateFromString("(14+2)^3 * 9");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: (14+2)^3 * 9 + 40 = 36904', () => {
    //Arrange
    calc = new Calculator();
    let expected = 36904;

    //Act
    let result = calc.calculateFromString("(14+2)^3 * 9 + 40");

    //Assert
    expect(result).toBe(expected);
});

test('calculate from string: (14+2)^3 * 9 + 40 - 1 = 36903', () => {
    //Arrange
    calc = new Calculator();
    let expected = 36903;

    //Act
    let result = calc.calculateFromString("(14+2)^3 * 9 + 40 - 1");

    //Assert
    expect(result).toBe(expected);
});