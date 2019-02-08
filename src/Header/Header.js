import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid" id="header">
                <h1 id="headerTitle">Dinner Planner</h1>
            </div>
        );
    }
}

export default Header;