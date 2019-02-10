import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css';
import Button from '@material-ui/core/Button';

class Sidebar extends Component {

  constructor(props) {
    super(props)
    // we put on state the properties we want to use and modify in the component
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    }
  }

  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.props.model.addObserver(this)
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = (e) => {
    this.props.model.setNumberOfGuests(+e.target.value)
  }

  handleRemoveClick = (e) => {
    console.log("Click came from: " + e.target.getAttribute('id'))
    //this.props.model.removeDishFromMenu(this.target.id)
}

  render() {
    let currentMenu = null;

    currentMenu = this.props.model.getFullMenu().map((dish) =>
      <div className="row" key={dish.title}>
        <div className="container-fluid menuItem" id={parseInt(dish.id)} onClick={this.handleRemoveClick}>
          <div className="container-fluid col-6 dishName">{dish.title}</div>
          <div className="container-fluid col-6 cost">{dish.pricePerServing}</div>
        </div>
      </div>
    );

    return (
      <div className="container-fluid col-3 d-none d-md-block Sidebar">
        <h2>My dinner</h2>
        <p>
          People: <input type='number' value={this.state.numberOfGuests} onChange={this.onNumberOfGuestsChanged} />
        </p>

        <div className="container-fluid sideBarTitles">
          <div className="row">
            <div className="container-fluid col-6 dishName">Dish Name</div>
            <div className="container-fluid col-6 cost">Cost</div>
          </div>
        </div>
        {currentMenu}

        <div className="container-fluid btnContainer">
          <Button component={Link} to="/overview" variant='contained' id="confirmDinnerBtn">
            Confirm Dinner
          </Button>
        </div>

      </div>
    );
  }
}

export default Sidebar;
