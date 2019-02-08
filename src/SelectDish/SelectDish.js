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
        <Dishes />
      </div>
    );
  }
}

export default SelectDish;
