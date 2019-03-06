import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel'
//import SelectDish from "./SelectDish/SelectDish";
import DishDetails from "./DishDetails/DishDetails";
import DinnerOverview from "./DinnerOverview/DinnerOverview";
import DinnerPrintout from "./DinnerPrintout/DinnerPrintout";
import Dishes from "./Dishes/Dishes";
import { ErrorBoundary } from 'react-error-boundary';
import errorIcon from './errorIcon.png';

const errorHandler = ({ error }) => (
	<div className="container-fluid col-6" id="errorContainer">
			<div className="row">
				<div className="container-fluid col-6" id="errorTextContainer">
					<h5>Oh no, an error occured!</h5>
					<p>Error: {error.toString()}</p>
				</div>
				<div className="container-fluid col-6" id="errorImageContainer">
					<img className="img-fluid" src={errorIcon} id="errorImg" alt="No network available"/>
				</div>
				<div className="container-fluid col-8" id="solutionContainer">
					<h6>Check your internet connection and try reloading the page</h6>
				</div>
		</div>
	</div>
);


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'Dinner Planner',
		}
	}

	render() {
		return (
			<div className="App">
				<ErrorBoundary FallbackComponent={errorHandler}>
					<header className="App-header">
						{<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />}
						{<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />}

						<Route exact path="/" component={Welcome} />
						<Route path="/search" render={() => <Dishes model={modelInstance} />} />
						<Route path="/details" render={() => <DishDetails model={modelInstance} />} />
						<Route path="/overview" render={() => <DinnerOverview model={modelInstance} />} />
						<Route path="/printout" render={() => <DinnerPrintout model={modelInstance} />} />

					</header>
				</ErrorBoundary>
			</div>
		);
	}
}

export default App;
