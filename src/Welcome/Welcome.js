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

        <div id="homeView" className="container">
          <div id="homeScreen" className="row">
            <div id="home" className="row-md-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque cursus accumsan. Ut cursus iaculis
                augue
                in vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan justo vel quam fermentum, eu
                malesuada leo vestibulum. Nunc justo turpis, mattis at diam mattis, ultrices aliquam risus. Etiam id ultrices
                neque. Fusce egestas ultrices justo, at accumsan enim pharetra non. Proin sed enim fermentum, bibendum eros vel,
                venenatis massa. Sed blandit erat aliquet neque gravida lacinia. Sed vitae aliquam arcu, sed viverra dolor. Etiam
                a
                felis nulla. Fusce lacinia congue viverra. Pellentesque in ullamcorper sem.
				        </p>

              <Link to="/search">
                <button id="newDinnerButton" typ="button" className="btn btn-warning">Create New Dinner!</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Welcome;
