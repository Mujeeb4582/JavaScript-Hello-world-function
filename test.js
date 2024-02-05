const createHelloWorld = require("./hello");
const assert = require("assert");

describe("Hello function", () => {
	it('should return "Hello World"', () => {
		const hello = createHelloWorld();
		const result = hello();
		assert.equal(result, "Hello World");
	});

	it('should return "Hello World" again', () => {
		const hello = createHelloWorld();
		const result = hello();
		assert.equal(result, "Hello World");
	});
});
