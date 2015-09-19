import React, { Component, PropTypes } from 'react';
import AppActions from '../actions/actions.js';

class AddToCart extends Component {


	handler = () => {

		AppActions.addItem( this.props.items );
	};

	render() {
		return <button onClick={ this.handler } >Add to Cart</button>
	}

}

export default AddToCart;