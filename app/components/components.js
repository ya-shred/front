import React, { Component, PropTypes } from 'react';
import AppActions from '../actions/actions.js';
import Catalog from './catalog.js';
import Cart from './cart.js';


class Components extends Component {

	render() {
		return <div>
			<h1> Lets Shop </h1>
			<Catalog/>
			<h1> Lets Cart</h1>
			<Cart/>
		</div>
	}

}

export default Components;