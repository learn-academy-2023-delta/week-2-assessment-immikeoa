# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: a parameter is a variable set in the the function that will accept an argument passed in when the the function is invoked

Researched answer: A parameter is a variable or a placeholder used in the function/method definition to represent a value that the function expects to receive. An argument is a specific value or expression passed to a function/method when it is called or invoked.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: It takes the value of each index in the array been map. 

Researched answer: For a .map() it takes a callback function as its parameter, which is called for each element in the array:
           currentValue (required): The current element being processed in the array.
           index (optional): The index of the current element being processed in the array.
           array (optional): The array on which the .map() method was called.


3. What is the difference between map and filter?

Your answer: .map method will iterarte throught the array and output the array with the same lenght. the .filter method iterates throught the array but output an array with different lenght due to the condition set in method. Only the value that passed the conditional will pass to the new array.

Researched answer: They both take iterate throught an array and output a new on. A map outputs a new array with same lenght as the original while the .filter outputs a different lenght.

1. What is iteration?

Your answer: the repetition of task in programming

Researched answer: Iteration refers to the process of repeatedly performing a set of instructions or operations. In programming, iteration is often used to perform tasks on a collection of elements, such as iterating over an array or a list, to process each element individually.

1. What is the difference between a function and a method?

Your answer: a funtion is a block of code created by the programmer that can be invoked many time. A method is a built in function in the proggraming language.

Researched answer: A function is a block of code that performs a specific task or set of instructions. It is a self-contained unit of code that can be called or invoked from different parts of a program. Functions are generally standalone and not associated with any particular object or class. A method is a function that is associated with an object or a class. It is a behavior or action that an object or class can perform.

6. STRETCH: What is hoisting in JavaScript?

Your answer: The ability to access a variable within a self contain block of code.

Researched answer: s a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, while still maintaining their original order in the code. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: is a modular and reusable piece of code that encapsulates specific functionality and can be combined with other components to build larger software systems.

2. Spread operator: it allows an iterable (such as an array, string, or object) to be expanded into individual elements. It provides an easy and concise way to manipulate and combine arrays, clone objects, and pass multiple arguments to functions.

3. React state: In React, state is a built-in feature that allows components to manage and store data that can change over time. State represents the current state or values of a component and is used to determine how the component should render and behave in response to user interactions, data fetching, or other events.

4. React props: are a way to pass data from a parent component to its child components. Props allow components to be configurable and customizable, enabling the composition and reuse of components with different data and behaviors.

5. DOM events: DOM events in web development refer to actions or occurrences that happen in the Document Object Model (DOM) of an HTML document. These events can be triggered by user interactions, like clicking a button or submitting a form, or by other actions such as the page finishing loading or a timer reaching a specified interval.
