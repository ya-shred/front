import React from 'react';
import MessageItem from '../message-item';
import AppStore from '../../stores/app-store';
import './index.styl';
export default class MessagesList extends React.Component {
    state = {
        messages: AppStore.getCurrentMessages()
    };

    componentDidMount = () => {
        this.scrollToBottom();
        AppStore.addChangeListener(this.onChange);
    };

    componentWillUnmount = () => {
        AppStore.removeChangeListener(this.onChange);
    };

    render() {
        const messages = [];

        if (this.state.messages.length === 0){
            messages.push(<p>Ничего не найдено((</p>);
        } else {
            this.state.messages.map(function (message) {
                let userStateClass;
                if (message.online) {
                    userStateClass = "message__user-state message__user-state_online"
                } else {
                    userStateClass = "message__user-state"
                }
                messages.push(<MessageItem key={message.id} avatarUrl={message.avatarUrl} userState={userStateClass}
                                           userName={message.userName} userDisplayName={message.userDisplayName}
                                           messageTime={message.messageTime} messageText={message.messageText}/>);
            });
        }
        return (
            <div className="message-list" ref="messageList">
                    {messages}
            </div>
        );
    }
    componentDidUpdate = () => this.scrollToBottom();

    scrollToBottom = () => {
        let messageList = this.refs.messageList.getDOMNode();
        messageList.scrollTop = messageList.scrollHeight;
    };

    onChange = () => {
        this.setState({messages: AppStore.getCurrentMessages()})
    };

}
