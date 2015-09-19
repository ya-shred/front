import React, { Component, PropTypes } from 'react';
import AppActions from "../actions/actions.js";


class Components extends Component {

	handler = () => {
		AppActions.addMessage('akd;lakd;las');
	};
	render() {
		return <div>
			<h1 onClick={this.handler}> Lets Shop</h1>
		</div>
	}

}

export default Components;