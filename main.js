"use strict";
//                    🚀 Day 12 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
//Question 34
//Pizzas: Share your favorite pizzas and express your love for them.
let pizzas = ["Fajita", "Malai Boti", "Tikka"];
pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");
//Question 35
//Animals: Highlight animals with a common trait.
let animals = ["Cat", "Dog", "rabbit"];
animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
//Question 36
// T-Shirt: Create a function for customizing t-shirts.
function make_shirt(size, message) {
    console.log(`Making a ${size} t-shirt with message "${message}" printed on it.`);
}
make_shirt("large", "I love coding");
