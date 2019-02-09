import React, { Component } from 'react';
import './Dishes.css';
// Alternative to passing the moderl as the component property, 
// we can import the model instance directly
import { modelInstance } from '../data/DinnerModel';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"

class Dishes extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error 
    this.state = {
      status: 'INITIAL'
    }
  }

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount = () => {
    var filterValue = this.refs.filterInput.value;
    var typeValue = this.refs.typeSelect.value;

    if (typeValue === "all") {
      modelInstance.getAllDishesApi("", String(filterValue)).then(recipes => {
        this.setState({
          status: 'LOADED',
          dishes: recipes
        })
      }).catch(() => {
        this.setState({
          status: 'ERROR'
        })
      })
    } else if (filterValue === "") {
      modelInstance.getAllDishesApi(String(typeValue), "").then(recipes => {
        this.setState({
          status: 'LOADED',
          dishes: recipes
        })
      }).catch(() => {
        this.setState({
          status: 'ERROR'
        })
      })
    } else {
      modelInstance.getAllDishesApi(String(typeValue), String(filterValue)).then(recipes => {
        this.setState({
          status: 'LOADED',
          dishes: recipes
        })
      }).catch(() => {
        this.setState({
          status: 'ERROR'
        })
      })
    }
    // when data is retrieved we update the state
    // this will cause the component to re-render

  }

  render() {
    let dishesList = null;

    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case 'INITIAL':
        dishesList = <em>Loading...</em>
        break;
      case 'LOADED':
        dishesList = this.state.dishes.map((dish) =>
          <div className="container-fluid col-12 col-lg-3 col-md-3 col-sm-4 imgCont" key={dish.id}>
            <img src={"https://spoonacular.com/recipeImages/" + dish.image} className="foodPic" alt="" />
            <Link to="/Details">
              <button onClick={modelInstance.setSelectedDishId(dish.id)} id={dish.id} className="btn btn-secondary dishBtn">{dish.title}</button>
            </Link>
          </div>
        )
        break;
      default:
        dishesList = <b>Failed to load data, please try again</b>
        break;
    }

    return (
      <div className="SelectDish">
        <Header/>

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

export default Dishes;
