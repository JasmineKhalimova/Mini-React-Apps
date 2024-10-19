# Knowladge Base 

## Functional components vs Class Components

- Functional components do not have a state or lifecycle methods

- Class components have a state and can implement lifecycle methods like componentDidMount and componentDidUpdate

# React Hooks

- Hooks were added to React in version 16.8. 

- Hooks are functions which allow functional components to have access to state and other React features. Because of this, class components are generally no longer needed.

    - Examples: useState(), useEffect(), useContext(), useRef(), useReducer(), useCallback(), useMemo() and Custom Hooks.

- useState() allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.

- useEffect() allows you to perform side effects in your components. Examples: fetching data, directly updating the DOM, and timers.

- useContext() is a way to manage state globally. It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

- useRef() allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

- useReducer() is similar to the useState Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

- useCallback() returns a memoized callback function. Think of memoization as caching a value so that it does not need to be recalculated. This allows us to isolate resource intensive functions so that they will not automatically run on every render. The useCallback Hook only runs when one of its dependencies update. This can improve performance.

- useMemo() eturns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update.This can improve performance.
    - The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

# React Classes

- Class components were used for:
    - To keep data in state
    - To use lifecycle methods 
    - To pass props from classes to functional components
However all these now possibile with react hooks.

# Functions

- `function App() {}` is a function declaration.

- `const testText = () => {}` is a function expression using arrow function syntax.

- Hoisting: 
        - Function Declaration - This type of function is hoisted to the top of its scope, meaning you can call it before it's defined in the code.
            App(); // Works fine because of hoisting
            function App() {
                console.log('Hello');
            }
        - Function Expression - This is not hoisted. The variable is hoisted, but the function itself is assigned to the variable only when the code reaches that line.
            testText(); // Error: Cannot access 'testText' before initialization
            const testText = () => {
            console.log('Hello');
            }
    - Binding of `this`:
        - Function Declaration - It has its own `this` context, which can change depending on how the function is called.
            function App() {
                console.log(this);
            }
        - Arrow Function - Arrow functions do not have their own this. Instead, they lexically inherit the this from the surrounding code (the parent scope). This makes arrow functions useful when you want to maintain the context of this from the outer scope.
            const obj = {
            name: 'test',
            regularFunc: function() {
                console.log(this.name); // 'test'
            },
            arrowFunc: () => {
                console.log(this.name); // Undefined or global context
            }
            };
            obj.regularFunc(); // 'test'
            obj.arrowFunc();   // Undefined or global context

# ES6 Recap

## Variable declarations `var`, `let`, and `const`
In JavaScript, var, let, and const are used to declare variables, but they behave differently in terms of scope, re-assignment, and hoisting.

- `var`
        Scope: var is function-scoped, which means it is accessible within the entire function where it's declared, even before its actual declaration (because of hoisting).
        Re-assignment: You can re-assign and re-declare var variables.
        Hoisting: Variables declared with var are hoisted (moved to the top of their scope), but they are initialized as undefined.

        function exampleVar() {
        console.log(x); // Outputs: undefined (due to hoisting)
        var x = 10;
        console.log(x); // Outputs: 10
        }

        exampleVar();

- `let`
        Scope: let is block-scoped, which means it is only accessible within the block (e.g., {}) where it is defined.
        Re-assignment: You can re-assign let variables but cannot re-declare them in the same scope.
        Hoisting: let is hoisted but not initialized, so if you try to use it before declaration, you’ll get a ReferenceError.

        function exampleLet() {
        // console.log(y); // ReferenceError (y is not hoisted like var)
        let y = 10;
        console.log(y); // Outputs: 10
        }

        exampleLet();

- `const`
        Scope: const is block-scoped like let.
        Re-assignment: You cannot re-assign or re-declare a const variable. It must be assigned a value at the time of declaration.
        Hoisting: Similar to let, const is hoisted but not initialized, so using it before declaration throws a ReferenceError.

        function exampleConst() {
        const z = 10;
        // z = 20; // Error: Assignment to constant variable.
        console.log(z); // Outputs: 10
        }

        exampleConst();

## String Concatenation vs Template Strings (Template Literals)
In JavaScript, you can combine strings in two ways: using template strings (also called template literals) or string concatenation.

- String Concatenation:
    - This is the traditional way of combining strings using the `+` operator. You manually concatenate (join) each string and variable.

    - Concatenation can become cumbersome when dealing with multiple strings or multiline text, as you need to manage the + operator carefully.

    let name = "Alice";
    let age = 25;

    // String concatenation
    let greeting = "Hello, my name is " + name + " and I am " + age + " years old.";
    console.log(greeting); 
    // Output: Hello, my name is Alice and I am 25 years old.


- Template Strings: 
    - Template strings (introduced in ES6) use backticks (`) instead of quotes and allow embedded expressions with ${}. They are more readable and flexible, especially for combining variables and writing multi-line strings.

    - In template strings, you don’t need to manually concatenate variables and text with +. Instead, you place the variable or expression inside ${} within the backticks.

    let name = "Alice";
    let age = 25;

    // Template string
    let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
    console.log(greeting);
    // Output: Hello, my name is Alice and I am 25 years old.


## Parameters
In JavaScript, regular parameters and default parameters are both ways of passing values to functions, but they differ in behavior when the function is called without passing an argument.

-  Regular Parameters:
    - Regular parameters are the usual parameters passed to a function.
    - If no argument is provided for a regular parameter, its value is undefined by default.
    - If you call greet() without passing a value, name will be undefined.

    function greet(name) {
    console.log("Hello, " + name);
    }

    greet("Alice"); // Outputs: Hello, Alice
    greet();        // Outputs: Hello, undefined

- Default Parameters:
    - Default parameters allow you to specify a default value for a parameter if no argument is provided or if the argument is undefined.
    - This prevents the need to manually check for undefined inside the function.
    - Here, name has a default value of "Guest". If no argument is passed to greet(), it will use "Guest" as the value.
    function greet(name = "Guest") {
    console.log("Hello, " + name);
    }

    greet("Alice"); // Outputs: Hello, Alice
    greet();        // Outputs: Hello, Guest

## Function Declarations and Expressions vs Arrow Functions
In JavaScript, regular functions and arrow functions are two ways to define functions, but they differ significantly in terms of syntax and behavior, especially regarding this, arguments, and function hoisting.

- Regular Functions (Function Declarations and Expressions)
    - Regular functions can be defined using either a function declaration or a function expression. They have their own this context, and their behavior is more traditional in terms of how functions work.

    - Example: Function Declaration

    function regularFunction() {
    console.log("This is a regular function.");
    }

    regularFunction();  // Outputs: This is a regular function.

    - Example: Function Expression

    const regularFunction = function() {
    console.log("This is a regular function.");
    };

    regularFunction();  // Outputs: This is a regular function.

- Arrow Functions

    - Arrow functions, introduced in ES6, have a more concise syntax and behave differently from regular functions in a few key ways:

        - No own this: Arrow functions don’t have their own `this` context; they inherit this from the surrounding (lexical) scope.
        - No arguments object: Arrow functions don’t have access to the arguments object (though you can use rest parameters instead).
        - Cannot be used as constructors: Arrow functions cannot be used with new, meaning they can’t be used as constructors.
        - No super or new.target: In classes, arrow functions don’t have access to `supe`r or `new.target`.

        const arrowFunction = () => {
        console.log("This is an arrow function.");
        };

        arrowFunction();  // Outputs: This is an arrow function.
- `this` keyword refers to enclosing content e.g. `{}`




