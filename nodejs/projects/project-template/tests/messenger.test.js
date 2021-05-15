const messenger = require("../src/messenger");

test('messenger - getMessage', () => {
  expect(messenger.getMessage()).toEqual("Hello world!");
});

test('messenger - getMessage', async () => {
  expect(await messenger.getAsyncMessage()).toEqual("Hello async!");
});