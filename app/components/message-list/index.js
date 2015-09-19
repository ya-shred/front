import React from 'react';
import MessageItem from '../message-item';

class MessagesList extends React.Component {
    render() {
        const messages = this.props.messages.map(function(message){
            let userStateClass;
            if (message.online) {
               userStateClass = "message__user-state message__user-state_online"
            } else {
                userStateClass = "message__user-state"
            }

            return (
                <MessageItem
                    key={message.id}
                    userState={userStateClass}
                    avatarUrl={message.avatarUrl}
                    userUrl={message.userUrl}
                    userName={message.userName}
                    userDisplayName={message.userDisplayName}
                    messageText={message.messageText}
                    messageTime={message.messageTime} />
            );
        });

        return (
            <div className="message-list" ref="messageList">
                {messages}
            </div>
        );
    }
}

export default MessagesList;