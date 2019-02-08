import React, { Component } from 'react';
import './DishDetails.css';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"
import Sidebar from '../Sidebar/Sidebar';
import Button from '@material-ui/core/Button';

class DishDetails extends Component {
    render() {
        return (
            <div>

                {/*
                TODO:
                Hitta selectedDish från model
                Hämta informationen om selected Dish från API:t (via model)
                Fyll följande element:
                    -titel
                    -bild
                    -beskrivning
                
                Iterera genom ingredienserna och fyll ingredient-table:t
                */}
                <Header />

                <Sidebar model={this.props.model} />

                <div id="dishDetails" className="container-fluid col offset-sm-3 offset-lg-2 col-sm-9 col-lg-10">
                    <div className="row">

                        {/* The left part of the view, describing the dish*/}
                        <div className="container-fluid col-6" id="dishDescription">
                            <h3 className="title" >Dish Title</h3>
                            <img className="img-fluid" src="https://via.placeholder.com/600" alt="Unable to load..." id="dishImage" />
                            <p>Nullam egestas lacus vel eros elementum viverra. Vivamus tristique quam vitae malesuada dictum. Donec fermentum nibh ac enim hendrerit sollicitudin. </p>
                            <div className="container-fluid" id="backBtnContainer">
                                <Button component={Link} to="/search" variant='contained' id="backToSearchBtn">
                                    Back to search
                                </Button>
                            </div>
                        </div>

                        {/* The right part of the view, describing the ingredients of the dish*/}
                        <div className="container-fluid col-6" id="dishIngredients">
                            <h3 className="title">Ingredients</h3>

                            <div className="table-responsive">
                                <div className="table table-hover">
                                    <table className="table" id="ingredientTable">
                                        <tbody>
                                            <tr>
                                                <td>300</td>
                                                <td>g</td>
                                                <td>Lorem ipsum dolor sit amet</td>
                                                <td>21</td>
                                            </tr>
                                            <tr>
                                                <td>300</td>
                                                <td>g</td>
                                                <td>consectetur adipiscing elit.</td>
                                                <td>24</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div className="container-fluid" id="addBtnContainer">
                                <Button component={Link} to="/search" onClick={console.log('Here it should add item to menu')} variant='contained' id="addToMenuBtn">
                                    Add to menu
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default DishDetails;