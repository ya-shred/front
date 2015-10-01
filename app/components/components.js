import React from 'react';
import Textarea from './textarea';
import MessageStore from '../stores/message';
import '../app-styles/app.styl';
import Header from './header/index';
import ContainerChat from './containerChat/index';


class Components extends React.Component {

	render() {
		return (
			<div>
				<Header/>
				<ContainerChat/>
			</div>
		);
	}
}



export default Components;