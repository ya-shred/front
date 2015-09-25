import React from 'react';
import MessageItem from '../message-item';
import AppStore from '../../stores/app-store';
import './index.styl';
export default class MessagesList extends React.Component {
    state ={
        messages: AppStore.getMessages()
    };

    componentDidMount = () => {
        this._scrollToBottom();
        AppStore.addChangeListener(this._onChange);
    };

    componentWillUnmount = () => AppStore.removeChangeListener(this._onChange);

    render() {
        const messages = this.state.messages.map(function(message){
            let userStateClass;
            if (message.online) {
               userStateClass = "message__user-state message__user-state_online"
            } else {
                userStateClass = "message__user-state"
            }
            return <MessageItem key={message.id} avatarUrl={message.avatarUrl} userState={userStateClass} userName={message.userName} userDisplayName={message.userDisplayName} messageTime={message.messageTime} messageText={message.messageText} />


        });

        return (
            <div className="message-list" ref="messageList">
                {messages}
            </div>
        );
    }
    componentDidUpdate = () => this._scrollToBottom();

    _scrollToBottom = () => {
        let messageList = this.refs.messageList.getDOMNode();
        messageList.scrollTop = messageList.scrollHeight;
    }

    _onChange= () => this.setState({messages: AppStore.getMessages()});
}
