import APIkey from './APIkey.js'



const DinnerModel = function () {

  const key = APIkey;
  var observers = [];
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
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("numberOfGuests", JSON.stringify(numberOfGuests));
    }
    notifyObservers();
  };

  // Get Number of Guests
  this.getNumberOfGuests = function () {
    numberOfGuests = localStorage.getItem("numberOfGuests");
    if (numberOfGuests === null) {
      numberOfGuests = 1;
    }
    return numberOfGuests;
  };

  //Returns the dish that is on the menu for selected type 
  this.getSelectedDish = function () {
    selectedDish = localStorage.getItem("selectedDish");
    if (selectedDish === null) {
      selectedDish = 684100;
    }
    return selectedDish;
  }

  // Set Selected Dish Id
  this.setSelectedDishId = function (id) {
    selectedDish = id;
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("selectedDish", JSON.stringify(selectedDish));
    }
    notifyObservers();
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function () {
    menu = JSON.parse(localStorage.getItem("menu"));
    if (menu === null) {
      menu = [];
    }
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
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("menu", JSON.stringify(menu));
    }
    notifyObservers();
  }

  //Removes dish from menu
  this.removeDishFromMenu = function (id) {
    let counter = 0
    let index = 0

    for (let item in menu) {
      if (parseInt(menu[item].id, 10) === id) {
        index = counter
        break;
      }
      counter += 1
    }
    menu.splice(index, 1);
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("menu", JSON.stringify(menu));
    }
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
      }).then(response => processResponse(response))
      .then(data => data.results).catch(error => handleError(error));
  }
  // Get selected dish from API
  this.getDishApi = function (id) {
    var ApiUrl = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/information`;
    return fetch(ApiUrl
      , {
        headers: { 'X-Mashape-Key': key }
      }).then(response => processResponse(response)).catch(error => handleError(error))
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
