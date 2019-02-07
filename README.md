# Dinner Planner React

Jacob Möller & Hugo Bergqvist
DH2642 Lab 4


## How to get started


1. First, make sure that you have npm installed on your system (follow the instructions
   at [Installing Node](https://docs.npmjs.com/getting-started/installing-node). The computers in the lab rooms
   should already have it, you will just need to do `module add node` to activate it (every time
   you start the terminal).

2. Run `npm install` through the terminal in the root of the repository. Let it
   install all the dependencies.

3. Run `npm start` through the terminal. This will start the webserver and the application should pop up in your
   browser ready for use. Alternatively you can open in through [http://localhost:3000]. Whenever you make changes in your code and save, the browser will update automatically, so you don't have to click refresh anymore.

## Understanding the startup code

* `public/index.html` - this is the static html file, and as opposed to previous labs, we don't put view's HTML here. It should only contain HTML that's shared among all the views (e.g. header, footer)
* `src/data/DinnerModel.js` - example of dinner model with number of guests, getAllDishes function implemented using `fetch()` and Observer pattern. You can copy other functions from your original model (and modify as needed to make it work with ES6 JavaScript class)
* `src/index.js` - this is where React is started. You will normally not need to modify this file, but you can check it to see how React is started and how it calls the App - which is our root component.
* `src/index.css` - put your global styles here
* `src/App.js` - root component you can modify it's HTML and add different routes to it
* `src/Dishes`, `src/SelectDish` etc. - contain the `.js` and `.css` file for each component. You should create your own components roughly corresponding to your views from previous labs.


## What you need to do

* reimplement the missing views following React practices
* use [Router](https://reacttraining.com/react-router/web/guides/philosophy) to map different url address (e.g. /search, /dish/ID) to specific components (the startup code already does that for welcome screen and select dish screen)
* implement cookies or localStorage so that the numberOfGuests and menu are persisted on the page reload
