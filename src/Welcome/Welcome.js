import React, { Component } from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <Header>

        </Header>

        <Link to="/search">
          <button>Start planning</button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
