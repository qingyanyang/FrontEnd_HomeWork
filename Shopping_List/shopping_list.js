/**
 * 1. Variable
 */
let shoppingList = ["milk", "egg", "toast"];
console.log(shoppingList);
/**
 * 2. Array 
 */
// add two items
shoppingList.push("tea");
shoppingList.push("chocolate");
console.log(shoppingList);

// delete last added item
shoppingList.pop();
console.log(shoppingList);

/**
 * 3. Condition and Loop 
 */
// function that notify thatcart is fullfilled when items quantity over 5
function itemFullNotification(list) {
    if (list.length > 5) {
        console.log("Your shopping cart is full!");
    }
};
itemFullNotification(shoppingList);
shoppingList.push("example1");
shoppingList.push("example2");
itemFullNotification(shoppingList);
shoppingList.pop();
shoppingList.pop();

// loop to print
shoppingList.forEach((element, index) => {
    console.log(`${index + 1}. ${element}`);
});

/**
 * 4. Function and Object
 */
// function that check if an item is in the cart
function checkItem(item) {
    return shoppingList.includes(item);
};

console.log(`is dumplings in the cart? ${checkItem("dumplings")}`);
console.log(`is milk in the cart? ${checkItem("milk")}`);

// shopping item obj
let item = {
    name: "milk",
    price: 12.00,
    quantity: 1
};
console.log("print obj:", item);