import React, { Component } from 'react';
import './DinnerPrintout.css';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"

class DinnerPrintout extends Component {
    render() {
        return (
            <div>
                <Header>
                </Header>

                <div id="dinner_printout">
                    <div id="dinnerPrintout" class="container-fluid border">
                        <div class="row">
                            <div class="col-md align-center">
                                <h2 id="myDinner">My dinner: <span id="numberOfPersons"></span> persons</h2>
                            </div>
                            <div class="col-md-auto"></div>
                            <div class="col-md align-center">
                                <Link to="/search">
                                    <button id="goBackButton" typ="button" class="btn btn-warning">Go back and edit dinner</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div id="dinnerSpecifics" class="container-fluid border">
                        <span id="dishesModel"></span>
                    </div>
                </div>

            </div>
        );
    }
}

export default DinnerPrintout;