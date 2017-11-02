# Sprint 2: Pizzabot – Part 1

Today's assignment is to create a little textbased pizzabot in which you can order pizza on your computer. The goal is to practice on basic programming concepts in Javascript like varaibles, types, if-statements and functions. For this we will use codepen which can run Javascript code easily. 

## How to complete this assignment

### 1. Setup the tools to use

1. Go to [codepen.io](https://codepen.io/) and create a new pen. 
1. Minimize the HTML and CSS window for now, we will only focus on Javascript. 
1. Go to `settings` and select `behaviour`. 
1. Disable `Auto-Updating Preview` and click ok. 
1. You should now get a new button in your penwindow that says `run`. 
1. Click on `console`in the lower left corner on the page to see the console. 
1. Type `console.log("I'm Ready!");`and hit `run`. 
1. If you can se the message `Ì'm ready`in the console, then you are ready to move on. 

### 2. Practice variables and types

A few things about your pizzeria: 
* Your pizzeria will have a very limited meny to start with, you only serve three different pizzas right now; Vegatariana, Hawaii and Pepperoni. 
* All your pizzas all have the same price, 80 SEK.
* Because of the big popularity of your store, you can only order multiple pizzas of the same sort. 

Start by creating a variable for each pizza type that stores the display name of that pizza, meaning the name you will have on the meny. 

Create a varibale for the price. 

Start the pizza bot by printing `"Hey! Happy to serve your pizza. On our menu we have, PIZZA_NAME1, PIZZA_NAME2 and PIZZA_NAME3"` using your variables.

Ask the user which pizza they want. 

Print and ask the user: `How many of PIZZA_NAME do you want?`

Calculate the total price of the order and print  `Great, I'll get started on your USER_ANSWER right away, it will cost PRICE kr`. 

### 3. Conditionals 

Add three conditinals to your program: 

1. Check that the pizza they order are on the menu and make sure that the user can type either one of the below examples for pizza names (for all types) and your program will still understand: 
* `Vegetariana`
* `vegetariana`

1. For everyone ordering Hawaii: You're currently out of pinapple so everytime someone orders a Hawaii you need to tell them that they will get the pizza without pinapple and also discount the price by 20%. 

1. Depending on how many pizzas they want to buy print:
*1-2 pizzas: `The pizzas will take 10 minutes`
*3-5 pizzas: `The pizzas will take 15 minutes`
*6+n pizzas: `The pizzas will take 20 minutes`

### 4. Functions

Transform the functionality of your program into writing Javascript functions.

Create three functions that: 
1. One that resturns the total cost for the order. 
1. One that checks if the order is Hawaii and returns the discounted price. 
1. One that resturns the number of minutes it will take to finish the order. 

### 5. Hand in assignment
The `starter-code` contains an empty javascript file that you will copy your code from codepen into. 

To complete this assignment, you need to fork this repository, paste your code into, and then submit a pull request on GitHub (from your repository into the technigo one) for review. [Read the guide on GitHub](https://guides.github.com/activities/forking/) for more info on how to do this.

### :books: Reading List

* [MDN – Javascript Grammar and Type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types)
* [MDN – Control flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
* [w3 Schools String methods](https://www.w3schools.com/js/js_string_methods.asp)

---

### :boom: Success!

After completing this assignment your should be confortable using: 
* Variables in Javasript
* String methods in Javascript
* Control flow and use conditionals in Javascript
* Use functions in Javascript

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Go to the Wikipedia Article about [Hawaiian Pizza](https://en.wikipedia.org/wiki/Hawaiian_pizza) and:

* Copy the first three paragraphs. Store the text in a String
* Make your program count the number of words in the string
* Make your program count the number of times the latin word etappears
