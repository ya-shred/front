import React, { Component, PropTypes } from 'react';
import AppActions from '../actions/actions.js';

class IncreaseItem extends Component {

	handler = () => {
		AppActions.increaseItem( this.props.index );
	}
	render() {

		return <button onClick={ this.handler }>+</button>
	}

}

export default IncreaseItem;