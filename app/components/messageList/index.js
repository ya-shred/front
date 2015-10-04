import React from 'react';
import './index.styl';
import MessageItem from "../messageItem";
import UsersListStore from '../../stores/usersList';
import NotFound from '../notFound';

export default class MessageList extends React.Component {

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        var messageList = this.refs.messageList.getDOMNode();
        messageList.scrollTop = messageList.scrollHeight;
    };

    render() {
        let msg;

        if(this.props.messages.length === 0){
            msg = <NotFound text="Сообщение не найдено!"/>;
        } else {
            msg = this.props.messages.map(function (item) {

                var messageUser = UsersListStore.getUserById(item.userId);

                return (
                    <MessageItem
                    key={item.id}
                    avatar={messageUser.avatarUrl}
                    name={messageUser.name}
                    message={item.message}
                    datetime={item.datetime}
                    />
                );
            });
        }
        return (
            <div className="message-list" key={this.props.key}  ref="messageList">
                {msg}
            </div>
        );

    }

}