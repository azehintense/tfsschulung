const sum = require('../source/sum');

test('adds 1 + 2 to equal 3', () => {
  //Arrange
  let expected = 3;

  //Act
  let result = sum(1, 2);

  //Assert
  expect(result).toBe(expected);
});

