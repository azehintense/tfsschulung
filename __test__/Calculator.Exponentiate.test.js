const Calculator = require('../source/Calculator');

test('does 4 ^ 3 to equal 64', () => {
    //Arrange
    calc = new Calculator();
    let expected = 64;

    //Act
    let result = calc.exponentiate(4, 3);

    //Assert
    expect(result).toBe(expected);
});
