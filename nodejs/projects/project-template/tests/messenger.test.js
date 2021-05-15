const messenger = require("../src/messenger");

test('messenger - getMessage', () => {
  expect("Hello world!").toEqual(messenger.getMessage());
});

test('messenger - getMessage', async () => {
  expect("Hello async!").toEqual(await messenger.getAsyncMessage());
});