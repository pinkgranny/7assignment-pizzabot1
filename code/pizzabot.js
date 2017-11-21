const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:



const pizzaOnMenu = () => {
let orderInput = prompt("Enter the name of the pizza you want to order today.");
  if (orderInput === vegetarian || orderInput === hawaiian || orderInput === pepperoni) {
    return orderInput
  } else {
    alert("I'm sorry, could not find that pizza on the menu. Try again, please. On our menu we have " + vegetarian + ", " + hawaiian + " and " +pepperoni + ".")
    return pizzaOnMenu ()
  }
}

const calculateCookingTime = (quantity) => {
  if (quantity >0 && quantity <= 2) {
    return 10
  } else if (quantity >=3 && quantity <=5) {
    return 15
  } else{
    return 20
  }
}

alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + ", " + hawaiian + " and " +pepperoni + ".");
let orderName = pizzaOnMenu()
let orderQuantity = prompt("How many of " + orderName + " do you want?");
console.log(orderName + " " + orderQuantity)
let orderTotal =( orderQuantity * pizzaPrice );
console.log(orderTotal);
let cookingTime = calculateCookingTime(orderQuantity)
// alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + "kr.");
alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + "kr. The pizzas will take " + cookingTime + " minutes.");




// if (orderQuantity >0 && orderQuantity <= 2){
//   let cookingTime(10);
// } else if (orderQuantity >=3 && orderQuantity <=5){
//   cookingTime(15);
// } else {
//   cookingTime(20);
// console.log(cookingTime);
// if  checkOrderName(vegetarian || hawaiian || pepperoni)
// let orderQuantity() => prompt("How many of " + orderName + " do you want?");
//
//
// let orderTotal=( orderQuantity * pizzaPrice );
// if (orderQuantity >0 && orderQuantity <= 2){
//   var cookingTime(10);
// } else if (orderQuantity >=3 && orderQuantity <=5){
//   var cookingTime(15);
// } else {
//   var cookingTime(20);
// }
//
// alert("Great, I'll get started on your " + orderName + " right away, it will cost " + orderTotal + "kr. The pizzas will take " + cookingTime + " minutes.");
