import React from 'react';
import './index.styl';

class MessageItem extends React.Component {

	render() {

		return <div className="chat-window__content-item" key={this.props.key }>

			<figure className="chat-window__content-avatar">
				<img className="chat-window__avatar" src={ this.props.avatar }/>
			</figure>
			<div className="chat-window__content-sending">
				<div className="chat-window__content-name">{this.props.name}<span className="chat-window__content-date">{ this.props.date }</span></div>
				<div className="chat-window__content-message">{ this.props.message }</div>
			</div>


		</div>

	}
}

export default MessageItem;