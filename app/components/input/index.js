import React from 'react';
import './index.styl';

export default class Input extends React.Component {

	render() {
		return (
			<input
			className={this.props.className }
			type={this.props.type }
			placeholder={this.props.placeholder}
			value={this.props.value }
			onClick={this.props.onClick }
			/>
		);
	}

}