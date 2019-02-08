import React, { Component } from 'react';
import './DishDetails.css';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"

class DishDetails extends Component {
    render() {
        return (
            <div>
                <Header>

                </Header>

                <div id="dishDetails" class="container-fluid col offset-sm-3 offset-lg-2 col-sm-9 col-lg-10">
                    <div class="lds-dual-ring" id="loader"></div>
                    <div id="dishDescription"></div>
                </div>

            </div>
        );
    }
}

export default DishDetails;