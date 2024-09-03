/**
 * 01. Where to use let and const
 */
// where should use let
let newName = "Alice";
console.log("update my name in CN: ", newName);

let satisfiedWithNewName = false;
console.log("satisfied with this new name? ", satisfiedWithNewName);

if (!satisfiedWithNewName) {
    newName = "Bob";
    console.log("choose another new name: ", newName);
}
console.log("my current new name: ", newName);


// where should use const
const myName = "Alice";
console.log("my official name: ", myName);

console.log("satisfied with this name? ", satisfiedWithNewName);

if (!satisfiedWithNewName) {
    // throw error
    // myName = "Bob";
    // console.log("update official name in AU: ", myName);

    // create new preferable name
    let myName = "Bob";
    console.log("create a preferable name in AU: ", myName);
}
console.log("my current official name in AU: ", myName);


/**
 * 02. Arrow function, and expain this in both normal and arrow function
 */
// to arrow function
const add = (a, b) => a + b;
/**
 * when invoking normal function, this means the obj that invokes the normal function;
 * 
 * arrow function has no this inside the body, but we can find the this from outer layers;
 * 
 */

/**
 * 03. Template Literals
 */
let greeting = `Hello, ${myName}! \nWelcome to the course.`
console.log(greeting);

/**
 * 04. Destructuring
 */
{
    const person = {
        name: "Alice",
        age: 25,
        city: "Sydney"
    };
    const { name, age } = person;
    console.log(name, age);

    function destructing({ name, age, city }) {
        console.log(`destructing function: name: ${name}, age: ${age}, city: ${city}`);
    }
    destructing(person);
}

/**
 * 05. Default Parameters
 */
function calculateArea(width, height = width) {
    console.log(`width: ${width}; height: ${height}; area: ${width * height}`);
    return width * height;
}
calculateArea(4);
calculateArea(4, 6);

/**
 * 06. Rest/Spread
 */
function sum(...arr) {
    const res = arr.reduce((pre, cur) => pre + cur, 0);
    console.log("sum of parameters: " + res);
}
sum(1, 2, 3, 4, 5);
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [...arr1, ...arr2];
console.log('merge arr1 and arr2 to arr3: ', arr3);
sum(...arr3);