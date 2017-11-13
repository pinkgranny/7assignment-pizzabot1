# Sprint 2: Pizzabot – Part 1

Today's assignment is to create a little text-based pizzabot in which you can order pizza on your computer. The goal is to practice basic programming concepts in JavaScript like variables, types, if-statements and functions.

## How to complete this assignment

A really good thing is to look through the readings for this assignment - you will find them helpful this time.

Write your bot in `code/pizzabot.js`, then open `code/index.html` in the browser to use the bot.

### 2. Practice variables and types

Before you start writing your "bot", there's a few things you should know about your pizzeria:

* Your pizzeria only serves 3 different pizzas right now; *Vegetarian*, *Hawaiian* and *Pepperoni*.
* All the pizzas have the same price - 80 SEK.
* Because of the popularity of your pizzeria, and long queues, you can only order multiple pizzas of the same sort.

We're going to be using a combination of `prompt()` and `alert()` to create the interaction between customer and bot in our pizzeria. Read more about how to use them here - https://www.w3schools.com/js/js_popup.asp

#### 2.1 Modeling the menu

We want to start by modeling the pizzeria menu by storing everything in variables.

The first task is to create 3 variables; one for each pizza name, and one more with the price of the pizzas (80SEK).

#### 2.2 Greeting the customer

Now we can start the "bot" interaction. Start by using `alert()` to print the message `"Hey! Happy to serve your pizza. On our menu we have, PIZZA_NAME1, PIZZA_NAME2 and PIZZA_NAME3"`. PIZZA_NAME1, PIZZA_NAME2 and PIZZA_NAME3 should be replaced with the variables for each pizza type.

#### 2.3 Ask the user which pizza they want, and how many

Use `prompt()` to ask the user which pizza they want: `Enter the name of the pizza you want to order today.`. Their response should be stored in a new variable.

Next, ask the user (with another `prompt()`) how many they'd like: `How many of PIZZA_NAME do you want?` (PIZZA_NAME should be replaced with the pizza they chose). This should also be stored in a new variable.

#### 2.4 Finalizing the order

Calculate the total price of the order using the variables and use an alert to tell the user:  `Great, I'll get started on your PIZZA_NAME right away, it will cost PRICE kr` (where PIZZA_NAME and PRICE are replace by the appropriate variables)

### 3. Conditionals

Add three conditionals statements (if-statements) to your program to improve it:

1. Check that the pizza they order is on the menu. Make sure that the user can type either one of the below examples for pizza names and your program will still understand:

* `Vegetarian` (Capitalization)
* `vegetarian` (Lowercase)

1. For everyone ordering Hawaiian: You're currently out of pineapple so every time someone orders a Hawaii you need to tell them that they will get the pizza without pineapple and also discount the price by 20%.

1. Depending on how many pizzas they want to buy, print:

*1-2 pizzas: `The pizzas will take 10 minutes`
*3-5 pizzas: `The pizzas will take 15 minutes`
*6+ pizzas: `The pizzas will take 20 minutes`

### 4. Functions

Clean up your code by moving some code into functions and then calling that function when needed.

Create four functions that:

1. One that returns `true` or `false` if the pizza is on the menu or not. It should handle the case checking of the pizza name as well.
1. One that returns the total cost for the order.
1. One that checks if the order is for Hawaiian pizzas and returns the discounted price due to the pineapple shortage.
1. One that returns the number of minutes it will take to finish the order.

### 5. Hand in assignment

As always, when you're done, submit a pull request on GitHub (from your repository into the technigo one) for review. [Read the guide on GitHub](https://guides.github.com/activities/forking/) for more info on how to do this.

### :books: Reading List

* [MDN – JavaScript Grammar and Type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types)
* [MDN – Control flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
* [w3 Schools String methods](https://www.w3schools.com/js/js_string_methods.asp)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language your're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment your should:

* Be comfortable using variables
* Know some string methods to modify strings
* Understand control flow and the use of conditionals statements
* Be able to write basic functions which take arguments and return values

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Go to the Wikipedia Article about [Hawaiian Pizza](https://en.wikipedia.org/wiki/Hawaiian_pizza) and:

* Copy the first three paragraphs. Store the text in a String
* Make your program count the number of words in the string
* Make your program count the number of times the word pineapple appears.

2. Instead of having your pizzabot live in the console make a form in HTML for the input from the user, pizza type and number of pizzas. Then make your program print it's response in HTML instead.

A combination of these two examples will help you on the way: [Forms submissions with JavaScript](https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_submit) and [Get Element by ID](https://www.w3schools.com/js/exercise.asp?filename=exercise_arrays4).
