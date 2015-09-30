import React from 'react';
import MessagesList from './messageList';
import Textarea from './textarea';
import MessageStore from '../stores/message';

function getMessagesState() {
    return {
        messages: MessageStore.getAllMessages()
    };
}

class Components extends React.Component {

	constructor () {
		super();
		this.state = getMessagesState();
		this._onChange = this._onChange.bind(this);
    }

	componentDidMount () {
		MessageStore.addChangeListener(this._onChange);
    }

	componentWillUnmount () {
		MessageStore.removeChangeListener(this._onChange);
    }

	_onChange () {
		this.setState(getMessagesState());
	}

	render() {
		return (
			<div>
				<h1>Hello world!</h1>
				<MessagesList messages={this.state.messages} />
				<Textarea />
			</div>
		);
	}
}



export default Components;