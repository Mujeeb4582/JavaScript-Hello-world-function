# JavaScript-Hello-world-function
This function may appear simple, but it encapsulates various JavaScript concepts. It's crucial to have a fundamental understanding of JavaScript to comprehend the underlying concepts.

## Concepts and Questions
1. How are functions perceived in JS?
> In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. Functions can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures.
2. Can functions be stored in Variables?
> Yes, functions can be stored in variables. This is often referred to as function expression.
```
const myFunction = function() {
  // function body
};
```
3. What are Immediately Invoked Function Expressions (IIFE)? Which OOPs principle can be implemented as an application for the same?
> IIFE is a way to execute a function immediately after its creation. It involves wrapping the function in parentheses and then invoking it.
``` 
(function() {
  // your code here
})();
``` 
> This can be used to implement encapsulation, one of the principles of Object-Oriented Programming (OOP), by creating a private scope for variables.
4. What is Hoisting ? Is it regarded as a good practice?
> Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. It is generally recommended to declare variables at the top of their scope to avoid unexpected behavior.
5. What are Closures/Lexical Environment of functions in JS?
> Closures occur when a function is defined inside another function, allowing access to the outer function's variables. The lexical environment of a function refers to the set of variables that are in scope for that function.
6. When do we need/omit a return it when using an arrow function?
> If the arrow function body consists of a single expression, you can omit the curly braces and the `return` keyword, and the result of the expression will be implicitly returned.
```
const add = (a, b) => a + b;
```
> If you need to perform multiple operations or include statements, you should use curly braces and explicitly include a `return` statement.
```
const add = (a, b) => { 
  console.log('result of addition: ', (a + b));
  return a + b;
}
```
7. Can features like `this`, `super` be used with arrow functions? Do they give the same result?
> Arrow functions do not have their own `this`. They inherit the `this` value from the enclosing context. Consequently, arrow functions are not suitable for methods that require their own `this` value, such as object methods or constructors. 
> Arrow functions cannot be used with `super` because they do not have their own `this`.
8. Can Arrow functions be used as a Constructor?
> No, arrow functions cannot be used as constructors because they do not have their own `this`. Constructors need their own `this` context, which arrow functions don't provide.
9. What do we mean by spread syntax?
> Spread syntax (`...`) allows an iterable, like an array or a string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
```
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
```
10. What is Rest Arguments in a function?
> Rest parameters (```...```) allow a function to accept any number of arguments as an array. It gathers the remaining arguments into an array.
```
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0); // numbers.reduce((Arrow function or Function), intial value of total)
}
```
11. What is a higher-order Function?
> A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. It allows for the composition of functions and is a common concept in functional programming.
```
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10
```
