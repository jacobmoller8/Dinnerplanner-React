import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css';
import Button from '@material-ui/core/Button';

class Sidebar extends Component {

	constructor(props) {
		super(props)
		// we put on state the properties we want to use and modify in the component
		this.handleRemoveClick = this.handleRemoveClick.bind(this);
		this.loadMenu = this.loadMenu.bind(this);
		this.state = {
			numberOfGuests: this.props.model.getNumberOfGuests(),
			currentMenu: this.loadMenu()
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

	loadMenu() {
		let loadedMenu = this.props.model.getFullMenu().map((dish, i) =>
			<div className="container-fluid col-12 menuItem" key={dish.title + " " + i} id={parseInt(dish.id, 10)} onClick={this.handleRemoveClick}>
				<div className="container-fluid col-6 dishName">{dish.title}</div>
				<div className="container-fluid col-6 cost">{dish.pricePerServing * this.props.model.getNumberOfGuests()}</div>
			</div>);

		return loadedMenu
	}

	// in our update function we modify the state which will
	// cause the component to re-render
	update() {
		let currentMenu = this.loadMenu();
		this.setState({
			numberOfGuests: this.props.model.getNumberOfGuests(),
			currentMenu
		})
	}

	// our handler for the input's on change event
	onNumberOfGuestsChanged = (e) => {
		this.props.model.setNumberOfGuests(+e.target.value)
	}

	handleRemoveClick = (e) => {
		this.props.model.removeDishFromMenu(parseInt(e.currentTarget.getAttribute('id'), 10))
	}


	render() {

		return (
			<div className="container-fluid col-3 d-none d-sm-block Sidebar">
				<h2>My dinner</h2>
				<div className="row">
					<p>People: </p>
					<input className="form-control col-4 peopleSelector" type='number' value={this.state.numberOfGuests} onChange={this.onNumberOfGuestsChanged} />
				</div>

				<div className="container-fluid col-12 sideBarTitles">
					<div className="row">
						<div className="container-fluid col-6 dishName">Dish Name</div>
						<div className="container-fluid col-6 cost">Cost</div>
					</div>
				</div>
				{this.state.currentMenu}

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
