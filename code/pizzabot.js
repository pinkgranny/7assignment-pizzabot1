const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:
alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + ", " + hawaiian + " and" +pepperoni + "."")
var orderName() => prompt("Enter the name of the pizza you want to order today.")

var checkOrderName()

// which should take the orderName variable as an argument and return true or false if the pizza is on the menu or not.
// When the user enters the orderName prompt, add an if-statement to check if the input text matches any of the pizza name variables (vegetarian, hawaiian, pepperoni).

var orderQuantity() => prompt("How many of " + orderName + " do you want?")

var orderTotal=( orderQuantity * pizzaPrice )
var cookingTime()

// which takes orderQuantity and returns the number of minutes it will take to finish the order.

// Before you print the final Great, I'll get started on your X right away, it will cost Y kr message to the user, calculate the cooking time based on these rules and add it to the message:
//
// 1-2 pizzas: The pizzas will take 10 minutes.
// 3-5 pizzas: The pizzas will take 15 minutes.
// 6+ pizzas: The pizzas will take 20 minutes.

alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + "kr. The pizzas will take " + cookingTime + " minutes." )
