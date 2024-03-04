const Calculator = require('../source/Calculator');

test('split 487', () => {
    //Arrange
    calc = new Calculator();
    let expected = ["487"];

    //Act
    let result = calc.seperateByOperator("487");

    //Assert
    expect(result).toEqual(expected);
});

test('split 4 + 2 * 5 to 4 + and 2 * 5', () => {
    //Arrange
    calc = new Calculator();
    let expected = ["4", "2 * 5"];

    //Act
    let result = calc.seperateByOperator("4 + 2 * 5", "+");

    //Assert
    expect(result).toEqual(expected);
});

test('split 8 * 3 + 2 + 5 to 8 * 3, 2, 5', () => {
    //Arrange
    calc = new Calculator();
    let expected = ["8 * 3", "2", "5"];

    //Act
    let result = calc.seperateByOperator("8 * 3 + 2 + 5", "+");

    //Assert
    expect(result).toEqual(expected);
});