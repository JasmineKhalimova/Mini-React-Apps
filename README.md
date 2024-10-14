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

# Display



