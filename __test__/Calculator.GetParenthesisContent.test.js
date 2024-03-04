const Calculator = require('../source/Calculator');

test('extract 4 + 3 from (4 + 3) * 2', () => {
    //Arrange
    calc = new Calculator();
    let expected = {
        content: "4 + 3",
        opening: 0,
        closing: 6
    };

    //Act
    let result = calc.getParenthesisContent("(4 + 3) * 2");

    //Assert
    expect(result).toEqual(expected);
});

test('extract 5 - 12 from 7 + ((5 - 12) * 2) + 4', () => {
    //Arrange
    calc = new Calculator();
    let expected = {
        content: "5 - 12",
        opening: 5,
        closing: 12
    };

    //Act
    let result = calc.getParenthesisContent("7 + ((5 - 12) * 2) + 4");

    //Assert
    expect(result).toEqual(expected);
});