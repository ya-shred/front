import React from 'react';
import Textarea from '../textarea';
import Input from '../input';
import MessageStore from '../../stores/message.js';
import MessageItem from "../messageItem";
import './index.styl';

class ChatWindowMessage extends React.Component {

	state = {
		msg: MessageStore.getAllMessages()
	};

	componentDidMount() {
		this.scrollToBottom();
		MessageStore.addChangeListener(this.addMessage);
	};

	addMessage = () => {
		this.setState({ msg: MessageStore.getAllMessages() })
	};

	componentWillUnmount() {
		MessageStore.removeChangeListener(this.addMessage);
	};

	componentDidUpdate() {
		this.scrollToBottom();
	};

	scrollToBottom = () => {
		var messageList = this.refs.messageList.getDOMNode();
		messageList.scrollTop = messageList.scrollHeight;
	};

	render() {
		console.log(this.state.msg);
		var msg = this.state.msg.map( function(item) {
			return <MessageItem
				key={ item.user.key }
			    avatar={ item.user.avatarUrl }
			    name={ item.user.displayName}
				message={item.message}
				date={item.datetime}
			/>
		});

		return <section className="chat-window">

			<div className="chat-window__content" ref="messageList">
				{msg}
			</div>

			<div className="chat-window__box-send-message">
				<Textarea/>
			</div>

		</section>
	}

}

export default ChatWindowMessage;