import React from 'react';
import MessagesList from './messageList';
import Textarea from './textarea';
import MessageStore from '../stores/message';
import MessageBox from './messageBox';
import '../app-styles/app.styl';
import UserList from './userList';

function getMessagesState() {
	return {
		messages: MessageStore.getAllMessages()
	};
}

class Components extends React.Component {

	constructor () {
		super();
		this.state = getMessagesState();
    }

	componentDidMount () {
		MessageStore.addChangeListener(this._onChange);
    }

	componentWillUnmount () {
		MessageStore.removeChangeListener(this._onChange);
    }

	_onChange = () => {
		this.setState(getMessagesState());
	}

	render() {
		return (
			<div>
				<h1>Hello world!</h1>
				<div className="thred-section">
					<UserList />
				</div>
				<div className="message-section">
					<MessagesList messages={this.state.messages} />
					<Textarea />
					<MessageBox />
				</div>
			</div>
		);
	}
}



export default Components;