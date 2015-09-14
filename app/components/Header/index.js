import React, { PropTypes, Component } from 'react';
import './index.styl';

class Header extends Component {

	render() {
		return <header className="header">
			<h1>Hello - <span className="shred">Shred!</span></h1>
		</header>
	}

}


export default Header;

