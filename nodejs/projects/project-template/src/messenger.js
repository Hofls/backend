module.exports = {
  getMessage: function() {
    return "Hello world!";
  },
  getAsyncMessage: async function() {
    await this.sleep(0.3);
    return "Hello async!";
  },
  sleep: async function(seconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000 * seconds);
    });
  }
};
