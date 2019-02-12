import React, { Component } from 'react';
import './DishDetails.css';
import { Link } from 'react-router-dom';
import Header from "../Header/Header"
import Sidebar from '../Sidebar/Sidebar';
import Button from '@material-ui/core/Button';
import TopNavbar from "../TopNavbar/TopNavbar"

class DishDetails extends Component {
    constructor(props) {
        super(props);

				this.handleAddClick = this.handleAddClick.bind(this);
				this.navHandler = this.navHandler.bind(this);
				this.resize = this.resize.bind(this);

        this.state = {
            status: 'INITIAL',
            numberOfGuests: this.props.model.getNumberOfGuests()
        }
    }

    componentDidMount = () => {

				this.props.model.addObserver(this);
				window.addEventListener('resize', this.resize)

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

    componentWillUnmount() {
				this.props.model.removeObserver(this);
				window.removeEventListener('resize', this.resize);
		}
		
		navHandler(){
			let navigation = null;
	
			let width = window.innerWidth;
				if (width > 768) {
					navigation = <Sidebar model={this.props.model} />
				}else{
					navigation = <TopNavbar model={this.props.model}/>
					}
				return navigation
		}
	
		resize = () => this.forceUpdate()
	



    handleAddClick = () => {
        this.props.model.addDishToMenu(this.state.dish)
    }

    update = () => {
        this.setState({
            numberOfGuests: this.props.model.getNumberOfGuests()
        })
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
                                        <td>{ingredient.amount * this.state.numberOfGuests}</td>
                                        <td>{ingredient.unit}</td>
                                        <td>{ingredient.name}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td>Price:</td>
                                    <td>{Math.round(this.state.dish.pricePerServing * this.state.numberOfGuests)} SEK</td>
                                    <td></td>
                                </tr>
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
                {this.navHandler()}

                <div id="dishDetails" className="container-fluid col offset-md-3 offset-lg-2 col-sm-9 col-lg-10">
                    <div className="row">

                        {/* The left part of the view, describing the dish*/}
                        <div className="container-fluid col-12 col-md-6" id="dishDescription">
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
                        <div className="container-fluid col-12 col-md-6" id="dishIngredients">
                            <h3 className="title">Ingredients</h3>
                            {table}
                            <div className="container-fluid" id="addBtnContainer">
                                <Button component={Link} to="/search" onClick={this.handleAddClick} variant='contained' id="addToMenuBtn">
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