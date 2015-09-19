import React, { Component, PropTypes } from 'react';
import AppActions from '../actions/actions.js';

class DecreaseItem extends Component {

	handler = () => {
		AppActions.decreaseItem( this.props.index );
	}
	render() {

		return <button onClick={ this.handler }>-</button>
	}

}

export default DecreaseItem;