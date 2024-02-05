function createHelloWorld() {
  return function() {
    return "Hello World";
  };
}

module.exports = createHelloWorld;