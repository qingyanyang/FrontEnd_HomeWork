/**
 * 
 * 
 * **Part 1: Setting Up TypeScript**

Exercise Task:

- Install TypeScript on your machine and set up a new TypeScript project.

Instructions:

- Use npm (Node Package Manager) to install TypeScript globally
- Create a new project directory and initialize it with a tsconfig.json file
- Create a new TypeScript file called index.ts in the project directory.
*/

/*
**Part 2: Basic Type Annotations**

Exercise Task:

- Write a function in index.ts that takes two numbers as parameters and returns their sum. Use TypeScript to annotate the types of the parameters and the return value.

Instructions:

- Define the function add with type annotations.
- Compile the TypeScript file to JavaScript using the tsc command and run the resulting JavaScript file.
*/
function sum(num1: number, num2: number): number {
  return num1 + num2;
}
const res = sum(1, 2);
console.log(res);
/*
**Part 3: Working with Interfaces**

Exercise Task:

- Define an interface Person with properties name (string) and age (number). 
Create a function greet that takes a Person object 
as a parameter and prints a greeting message.

Instructions:

- Define the Person interface and use it to type the parameter of the greet function.
- Create a Person object and pass it to the greet function.
 */

interface Person {
  name: string;
  age: number;
}

function greet(person: Person): void {
  console.log(`Hi, My name is ${person.name}, I am ${person.age} years old.`);
}

greet({ name: "momo", age: 18 });
