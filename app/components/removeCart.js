import React, { Component, PropTypes } from 'react';
import AppActions from '../actions/actions.js';

class RemoveToCart extends Component {

	handler = () => {
		AppActions.removeItem( this.props.index );
	}
	render() {

		return <button onClick={ this.handler }>x</button>
	}

}

export default RemoveToCart;