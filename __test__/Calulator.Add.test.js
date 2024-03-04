const Calculator = require('../source/Calculator');

test('does 1 + 2 to equal 3', () => {
    //Arrange
    calc = new Calculator();
    let expected = 3;

    //Act
    let result = calc.add(1, 2);

    //Assert
    expect(result).toBe(expected);
});

test('does 2 + 4 to equal 6', () => {
    //Arrange
    calc = new Calculator();
    let expected = 6;

    //Act
    let result = calc.add(2, 4);

    //Assert
    expect(result).toBe(expected);
});