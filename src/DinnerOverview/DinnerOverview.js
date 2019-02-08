import React, { Component } from 'react';
import './DinnerOverview.css';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"

class DinnerOverview extends Component {
    render() {
        return (
            <div>
                <Header>
                </Header>
                <div id="dinner_overview">
                    <div id="dinnerOverview" className="container-fluid border">
                        <div className="row">
                            <div className="col-md align-center">
                                <h2 id="myDinner">My dinner: <span id="numberOfPersons"></span> persons</h2>
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
                                <button id="printRecipeButton" typ="button" className="btn btn-warning">Print Full Recipe</button>
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
