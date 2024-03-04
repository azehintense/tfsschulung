const Calculator = require('../source/Calculator');

test('does 4 * 3 to equal 12', () => {
    //Arrange
    calc = new Calculator();
    let expected = 12;

    //Act
    let result = calc.multiply(4, 3);

    //Assert
    expect(result).toBe(expected);
});