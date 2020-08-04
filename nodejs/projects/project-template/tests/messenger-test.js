const assert = require("assert");
const messenger = require("../src/messenger");

describe("messenger", function() {
  it("should return message", async () => {
    assert.equal("Hello world!", messenger.getMessage());
  });
});
