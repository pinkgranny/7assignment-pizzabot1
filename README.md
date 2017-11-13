# Sprint 2: Pizzabot – Part 1

Today's assignment is to create a little textbased pizzabot in which you can order pizza on your computer. The goal is to practice on basic programming concepts in Javascript like varaibles, types, if-statements and functions. 

To do this we will use codepen, in which can run Javascript code easily. 

## How to complete this assignment

A really good thing is to look thorugh the readings for this assignment - you will find them helpful this time. 

### 1. Setup the tools to use

1. Go to [codepen.io](https://codepen.io/) and create a new pen. 
1. Minimize the HTML and CSS window for now, we will only focus on Javascript. 
1. Go to `settings` and select `behaviour`. 
1. Disable `Auto-Updating Preview` and click ok. 
1. You should now get a new button in your penwindow that says `run`. 
1. Click on `console` in the lower left corner on the page to see the console. 
1. Type `console.log("I'm Ready!");`and hit `run`. 
1. If you can se the message `Ì'm ready`in the console, then you are ready to move on. 

### 2. Practice variables and types

A few things about your pizzeria: 
* Your pizzeria only serves 3 different pizzas right now; Vegatariana, Hawaii and Pepperoni. 
* All the pizzas have the same price, 80 SEK.
* Because of the big popularity and queues, you can only order multiple pizzas of the same sort. 

Start by creating a variable for each pizza type. The variable should store the display name of that pizza – the name you will have on the menu. 

Create a new varibale for the price. 

Start the pizza bot by printing in the console `"Hey! Happy to serve you pizza. On our menu we have, xxxx, xxxx and xxxx"`. Use your varibales to print the menu of your pizzeria.  

[Ask](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) the user which pizza they want. Store the answer in a varible. 

Print and ask the user: `How many of xxxx do you want?`. Store the answer. 

Calculate the total price of the order by using your variables and print  `Great, I'll get started on your XXX right away, it will cost XXX kr`. 

### 3. Conditionals 

Add three conditionals to your program: 

1. Check that the pizza they order are on the menu. Make sure that the user can type either one of the below examples for pizza names and your program will still understand: 
* `Vegetariana` (Capitalization)
* `vegetariana` (Lowercase)

1. For everyone ordering Hawaii: You're currently out of pinapple so everytime someone orders a Hawaii you need to tell them that they will get the pizza without pinapple and also discount the price by 20%. 

1. Depending on how many pizzas they want to buy print:
*1-2 pizzas: `The pizzas will take 10 minutes`
*3-5 pizzas: `The pizzas will take 15 minutes`
*6+n pizzas: `The pizzas will take 20 minutes`

### 4. Functions

Transform the functionality of your program into writing them in Javascript functions.

Create four functions that: 
1. One that returns `true` or `false` if the pizza is on the menu or not. 
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

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language your're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask Damien. Please note: we are part of a sharing community - share the answer with your fellows.

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
* Make your program count the number of times the word pinapple appears. 

2. Instead of having your pizzabot live in the console make a form in HTML for the input from the user, pizza type and number of pizzas. Then make your program print it's response in HTML instead. Start by making it work in codepen and then move it into real `html` and `js` files.

A combination of these two examples will help you on the way: [Forms submissions with Javascript](https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_submit) and [Get Element by ID](https://www.w3schools.com/js/exercise.asp?filename=exercise_arrays4). 
`
