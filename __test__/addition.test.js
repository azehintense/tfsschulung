const Adder = require('../source/Adder');

test('adds 1 to 2 and gives 3', () => {
    //Arrange
    let model = new Adder();
    let expectedResult = 3;

    //Act
    let result = model.add(1, 2);

    //Assert
    expect(result).toBe(expectedResult);
});

test('adds 4 to 11 and gives 15', () => {
    //Arrange
    let model = new Adder();
    let expectedResult = 15;

    //Act
    let result = model.add(4, 11);

    //Assert
    expect(result).toBe(expectedResult);
});
