import React, { Component } from 'react';
import './DinnerPrintout.css';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"

class DinnerPrintout extends Component {

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

                <div id="dinner_printout">
                    <div id="dinnerPrintout" className="container-fluid border">
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
                </div>

            </div>
        );
    }
}

export default DinnerPrintout;