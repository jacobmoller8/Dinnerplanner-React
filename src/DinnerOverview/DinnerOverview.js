import React, { Component } from 'react';
import './DinnerOverview.css';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"

class DinnerOverview extends Component {

    constructor(props) {
        super(props)

        this.state = {
            numberOfGuests: this.props.model.getNumberOfGuests()
        }
    }
    componentDidMount() {
        this.props.model.addObserver(this)
    }
    componentWillUnmount() {
        this.props.model.removeObserver(this)
    }
    update() {
        this.setState({
            numberOfGuests: this.props.model.getNumberOfGuests()
        })
    }


    render() {
        return (
            <div>
                <Header>
                </Header>
                <div id="dinner_overview">
                    <div id="dinnerOverview" className="container-fluid border">
                        <div className="row">
                            <div className="col-md align-center">
                                <h2 id="myDinner">My dinner: {this.state.numberOfGuests} persons</h2>
                            </div>
                            <div className="col-md-auto"></div>
                            <div className="col-md align-center">
                                <Link to="/search">
                                    <button id="goBackButton" typ="button" className="btn btn-warning">Go back and edit dinner</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div id="dinnerSpecifics" className="container-fluid border">
                        <span id="dishesModel"></span>
                    </div>

                    <div id="recipeButtonContainer" className="container-fluid">
                        <div className="row">
                            <div className="col-sm"></div>
                            <div className="col-sm">
                                <Link to="/printout">
                                    <button id="printRecipeButton" typ="button" className="btn btn-warning">Print Full Recipe</button>
                                </Link>
                            </div>
                            <div className="col-sm"></div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default DinnerOverview;
