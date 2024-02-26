const Something = require('../source/something');

test('says hello', () => {
    let something = new Something();
  expect(something.hello()).toBe("hello");
});

test('makes a list', () => {
    let something = new Something();
  expect(something.list("a", "b", "c")).toStrictEqual(["a", "b", "c"]);
});