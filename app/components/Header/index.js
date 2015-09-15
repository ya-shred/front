import React, { PropTypes, Component } from 'react';
import './index.styl';

class Header extends Component {
	constructor() {
		super();
		this.state = { count: 0, value: "" };
		this._click = this._click.bind(this);
		this.value = this.value.bind(this);
	}
	_click() {
		this.setState({ count: this.state.count + 1})
	}
	value(e) {
		this.setState({ value: e.target.value })
	}

	render() {
		var count = this.state.count;
		var val =  this.state.value;
		return <header className="header">
			 <input type="button" value={"value " + count } onClick={this._click} />
			<input type="text"  onChange={this.value}/>
			<div>{val}</div>
		</header>
	}

}


export default Header;

