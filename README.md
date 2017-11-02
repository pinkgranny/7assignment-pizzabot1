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

Your pizzeria will have a very limited meny to start with, you only serve three different pizzas right now; Vegatariana, Hawaii and Pepperoni. Your pizzas also have two different price levels; adult-sized, children-sized and extra-everything-size. 

Start by creating a variable for each pizza type that stores the display name of that pizza, meaning the name you will have on the meny. 

Create three varibales for the price ranges and set a price for each one. One variable could be ´adult_price´

Start the pizza bot by printing `"Hey! Happy to serve your pizza. On our menu we have, xxx, xxx and xxx"` using your variables.  

Ask the user which pizza they want. 

Answer by confirming their answer `Great, I'll get started on your USER_ANSWER right away`. 

Tell the user which options of size you have and ask which one they would like. 

Print a confirmation of the order that includes both the name of the pizza and the price that they need to pay. 

### 3. Conditionals 

First, expand your program by adding so that you can order multiple pizzas. 

Add two conditinals to your program: 

1. For everyone ordering Hawaii: You're currently out of pinapple so everytime someone orders a Hawaii you need to tell them that they will get the pizza without pinapple and also discount the price by 20%. 

1. Depending on how many pizzas they want print:
1-2 pizzas: `The pizzas will take 10 minutes`
3-5 pizzas: `The pizzas will take 15 minutes`
6+n pizzas: `The pizzas will take 20 minutes`

### 4. Functions

Make your two conditionals into two functions instead, one that resturns the discounted price and one that resturns the number of minutes that they have to wait. 

### 5. Hand in assignment
The `starter-code` contains an empty javascript file that you will copy your code from codepen into. 

To complete this assignment, you need to fork this repository, paste your code into, and then submit a pull request on GitHub (from your repository into the technigo one) for review. [Read the guide on GitHub](https://guides.github.com/activities/forking/) for more info on how to do this.

### :books: Reading List

* [CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)
* [HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
* [HTML Images](https://www.w3schools.com/html/html_images.asp)
* [CSS Floats](https://www.w3schools.com/css/css_float.asp)

---

### :boom: Success!

After completing this assignment, you should be comfortable using HTML tags to create layout (with divs, sections, etc). You should also be comfortable with using content tags to insert text and images. Finally, you should understand the effect of margins and padding in CSS.

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Make the photos look nice on retina displays (high pixel density).
1. Align the cards to the center of the page.
1. Use box shadows to make the cards look like Polaroid pictures.
