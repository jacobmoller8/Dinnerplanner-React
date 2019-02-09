import React, { Component } from 'react';
import './DishDetails.css';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"
import Sidebar from '../Sidebar/Sidebar';
import Button from '@material-ui/core/Button';

class DishDetails extends Component {
    constructor(props) {
        super(props);
        // We create the state to store the various statuses
        // e.g. API data loading or error 
        this.handleAddClick = this.handleAddClick.bind(this);
        this.state = {
            status: 'INITIAL'
        }
    }

    componentDidMount = () => {
        this.props.model.getDishApi(this.props.model.getSelectedDish()).then(result => {
            this.setState({
                status: 'LOADED',
                dish: result
            })
        }).catch(() => {
            this.setState({
                status: 'ERROR'
            })
        })
    }

    handleAddClick = () => {
        this.props.model.addDishToMenu(this.state.dish)
    }

    render() {
        let dish = null;
        let table = null;

        switch (this.state.status) {
            case 'INITIAL':
                dish = <em>Loading...</em>
                table = <div className="lds-dual-ring" id="loader"></div>
                break;
            case 'LOADED':
                dish = this.state.dish
                table = <div className="table-responsive">
                    <div className="table table-hover">
                        <table className="table" id="ingredientTable">
                            <tbody>
                                {this.state.dish.extendedIngredients.map((ingredient) =>
                                    <tr key={ingredient.name}>
                                        <td>{ingredient.amount}</td>
                                        <td>{ingredient.unit}</td>
                                        <td>{ingredient.name}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>;
                break;
            default:
                dish = <b>Failed to load data, please try again</b>
                break;
        }
        return (
            <React.Fragment>
                <Header />
                <Sidebar model={this.props.model} />

                <div id="dishDetails" className="container-fluid col offset-sm-3 offset-lg-2 col-sm-9 col-lg-10">
                    <div className="row">

                        {/* The left part of the view, describing the dish*/}
                        <div className="container-fluid col-6" id="dishDescription">
                            <h3 className="title" >{dish.title}</h3>
                            <img className="img-fluid" src={dish.image} alt="Unable to load..." id="dishImage" />
                            <p>{dish.instructions}</p>
                            <div className="container-fluid" id="backBtnContainer">
                                <Button component={Link} to="/search" variant='contained' id="backToSearchBtn">
                                    Back to search
                                </Button>
                            </div>
                        </div>

                        {/* The right part of the view, describing the ingredients of the dish*/}
                        <div className="container-fluid col-6" id="dishIngredients">
                            <h3 className="title">Ingredients</h3>
                            {table}
                            <div className="container-fluid" id="addBtnContainer">
                                <Button component={Link} to="/details" onClick={this.handleAddClick} variant='contained' id="addToMenuBtn">
                                    Add to menu
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default DishDetails;