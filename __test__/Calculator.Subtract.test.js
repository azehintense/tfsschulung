const Calculator = require('../source/Calculator');

test('does 5 - 3 to equal 2', () => {
    //Arrange
    calc = new Calculator();
    let expected = 2;

    //Act
    let result = calc.subtract(5, 3);

    //Assert
    expect(result).toBe(expected);
});

test('does 1 - 7 to equal -6', () => {
    //Arrange
    calc = new Calculator();
    let expected = -6;

    //Act
    let result = calc.subtract(1, 7);

    //Assert
    expect(result).toBe(expected);
});