import APIkey from './APIkey.js'



const DinnerModel = function () {

  const key = APIkey;
  var observers = [];
  console.log(observers);
  var numberOfGuests = 1;
  var menu = [];
  var selectedDish = "";

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  };

  // Set Number of Guests
  this.setNumberOfGuests = function (num) {
    if (num < 1) return;
    numberOfGuests = num;
    notifyObservers();
  };

  // Get Number of Guests
  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

  //Returns the dish that is on the menu for selected type 
  this.getSelectedDish = function () {
    return selectedDish;
  }

  // Set Selected Dish Id
  this.setSelectedDishId = function (id) {
    selectedDish = id;
    notifyObservers();
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function () {
    return menu;
  }

  // Returns the price for the dish
  this.getDishPrice = function (dish) {
    var dishPrice = 0;
    dishPrice += dish.pricePerServing * numberOfGuests;
    return parseInt(dishPrice.toFixed(2), 10);
  }

  //Returns the total price of the menu 
  this.getTotalMenuPrice = function () {
    var menuPrice = 0;
    for (var i = 0; i < menu.length; i++) {
      menuPrice += this.getDishPrice(menu[i]);
    }
    return menuPrice;
  }

  //Add dish to menu
  this.addDishToMenu = function (dish) {
    menu.push(dish);
    notifyObservers();
  }

  //Removes dish from menu
  this.removeDishFromMenu = function (id) {
    for (var i = 0; i < menu.length; i++) {
      if (id = menu[i].id) {
        var index = i;
      }
    }
    menu.splice(index, 1);
    notifyObservers();
  }

  // API Calls


  // Get all dishes from API
  this.getAllDishesApi = function (type, filter) {
    var filterVar = ""
    var typeVar = ""
    if (filter) { filterVar = filter }
    if (type) { typeVar = type }
    var ApiUrl = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?instructionsRequired=false&limitLicense=false&number=8&offset=0&query=${filterVar}&type=${typeVar}`
    return fetch(ApiUrl
      , {
        headers: { 'X-Mashape-Key': key }
      }).then(response => response.json())
      .then(data => data.results);
  }
  // Get selected dish from API
  this.getDishApi = function (id) {
    var ApiUrl = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`;
    return fetch(ApiUrl
      , {
        headers: { 'X-Mashape-Key': key }
      }).then(response => response.json())
  }

  // API Helper methods

  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  }

  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllDishes() API Error:', error.message || error)
      })
    } else {
      console.error('getAllDishes() API Error:', error.message || error)
    }
  }

};

export const modelInstance = new DinnerModel();
