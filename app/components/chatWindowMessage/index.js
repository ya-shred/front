import React from 'react';
import Textarea from '../textarea';
import Input from '../input';
import SearchMessage from '../searchMessage';
import MessageStore from '../../stores/message.js';
import UsersListStore from '../../stores/usersList';
import MessageList from "../messageList";
import './index.styl';

var getMessages = () => {
    return {
        messages: MessageStore.getAllMessages(),
        users: UsersListStore.getAllUsers()
    }
};

export default class ChatWindowMessage extends React.Component {
    constructor() {
        super();
        this.state = getMessages();
    }

    componentDidMount() {
        MessageStore.addChangeListener(this.onChange);
    }

    onChange = (text) => {
        this.setState(getMessages());
    };

    componentWillUnmount() {
        MessageStore.removeChangeListener(this.onChange);
    }

    render() {
        return <section className="chat-window">
            <SearchMessage/>
            <div className="chat-window__content">
                <MessageList messages={this.state.messages} users={this.state.users} />
            </div>

            <div className="chat-window__box-send-message">
                <Textarea/>
            </div>

        </section>
    }

}