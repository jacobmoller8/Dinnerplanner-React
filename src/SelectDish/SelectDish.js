import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';
import Header from "../Header/Header"

class SelectDish extends Component {
  render() {
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
                <input className="form-control" id="filterInput" placeholder="Enter keywords" />
              </div>
              <div className="form-group col-5">
                <select className="form-control" id="typeSelect">
                  <option selected value="all" id="allType">All</option>
                  <option value="appetizer" id="starterType">Appetizer</option>
                  <option value="main course" id="mainType">Main course</option>
                  <option value="side dish" id="dessertType">Side dish</option>
                  <option value="dessert" id="dessertType">Dessert</option>
                  <option value="breakfast" id="dessertType">Breakfast</option>
                  <option value="soup" id="dessertType">Soup</option>
                </select>
              </div>
              <div className="form-group col-2">
                <button type="button" id="searchDishButton" className="btn btn-secondary confirmDinnerButton">Search</button>
              </div>
            </div>
          </form>
        </div>

        <div className="container-fluid offset-sm-3 offset-lg-2 col-7 col-sm-9 col-lg-10" id="dishSearchBody">

          <div id="dishesSpan">

          </div>
        </div>

      </div>
    );
  }
}

export default SelectDish;
