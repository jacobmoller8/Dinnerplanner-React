import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
//import Dishes from '../Dishes/Dishes';
import Header from "../Header/Header"
import { Link } from 'react-router-dom';

class SelectDish extends Component {

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);

    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests(),
      selectedDish: this.props.model.getSelectedDish(),
      dishes: []
    }
  }
  componentDidMount() {
    this.props.model.addObserver(this)
    this.update()
  }
  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  update() {
    var filterValue = this.refs.filterInput.value;
    var typeValue = this.refs.typeSelect.value;

    if (typeValue === "all") {
      this.props.model.getAllDishesApi("", String(filterValue)).then(recipes => {
        this.setState({
          dishes: recipes
        })
      })
    }
    else if (filterValue === "") {
      this.props.model.getAllDishesApi(String(typeValue), "").then(recipes => {
        this.setState({
          dishes: recipes
        })
      })
    }
    else {
      this.props.model.getAllDishesApi(String(typeValue), String(filterValue)).then(recipes => {
        this.setState({
          dishes: recipes
        })
      })
    }
  }

  render() {

    var dishesList = this.state.dishes.map((dish) =>
      <div className="container-fluid col-12 col-lg-3 col-md-3 col-sm-4 imgCont" key={dish.id}>
        <img src={"https://spoonacular.com/recipeImages/" + dish.image} className="foodPic" alt="" />
        <Link to="/Details">
          <button id={dish.id} className="btn btn-secondary dishBtn">{dish.title}</button>
        </Link>
      </div>
    )

    return (
      <div className="SelectDish">
        <Header>

        </Header>

        {/* We pass the model as property to the Sidebar component */}
        <Sidebar model={this.props.model} />

        <div className="container-fluid col offset-sm-3 offset-lg-2 col-sm-9 col-lg-10" id="dishSearchNav">
          <h4>FIND A DISH</h4>

          <form id="dishSearchForm">
            <div className="form-row">
              <div className="form-group col-5">
                <input className="form-control" id="filterInput" ref="filterInput" placeholder="Enter keywords" />
              </div>
              <div className="form-group col-5">
                <select className="form-control" id="typeSelect" ref="typeSelect">
                  <option defaultValue="all" id="allType">All</option>
                  <option value="appetizer" id="starterType">Appetizer</option>
                  <option value="main course" id="mainType">Main course</option>
                  <option value="side dish" id="dessertType">Side dish</option>
                  <option value="dessert" id="dessertType">Dessert</option>
                  <option value="breakfast" id="dessertType">Breakfast</option>
                  <option value="soup" id="dessertType">Soup</option>
                </select>
              </div>
              <div className="form-group col-2">
                <button type="button" id="searchDishButton" className="btn btn-secondary confirmDinnerButton" onClick={this.update}>Search</button>

              </div>
            </div>
          </form>
        </div>

        <div className="container-fluid offset-sm-3 offset-lg-2 col-7 col-sm-9 col-lg-10" id="dishSearchBody">
          <div className='row'>
            {dishesList}
          </div>
        </div>

      </div>
    );
  }
}

export default SelectDish;
