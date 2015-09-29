import React from 'react';
import MessageItem from '../messageItem';

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
                    user={message.user}
                    userState={userStateClass}
                    datetime={message.datetime}
                    message={message.message} />
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