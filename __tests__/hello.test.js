const Hello = require("../index")

test('should return "hello world"', () => {
    const hello = new Hello();
    expect(hello.helloWorld()).toBe('hello world');
});
