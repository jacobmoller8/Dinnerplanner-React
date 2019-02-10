import React, { Component } from 'react';
import './DinnerPrintout.css';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"

class DinnerPrintout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            numberOfGuests: this.props.model.getNumberOfGuests(),
            menu: this.props.model.getFullMenu()
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
            numberOfGuests: this.props.model.getNumberOfGuests(),
            menu: this.props.model.getFullMenu()
        })
    }
    render() {

        let dishesList = null;

        dishesList = this.state.menu.map((dish, index) =>
            <div className="row justify-content-md-center mt-4 mb-4" key={index}>
                <div className="col-sm-1" />
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={dish.image} width="100%" className="img-fluid" alt="Responsive image" />
                        </div>
                        <div className="col-md-7">
                            <h4 id="dishTitle"> {dish.title} </h4>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <h4>Preparation</h4>
                    <p>{dish.instructions}</p>
                </div>
            </div>

        )

        return (
            <React.Fragment>
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
                        {dishesList}
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default DinnerPrintout;