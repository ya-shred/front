import React from 'react';
import MessageActions from '../../actions/message';

export default class Textarea extends React.Component {
    constructor() {
        super();
        this.sendMessage = this.sendMessage.bind(this);
        this.changeText = this.changeText.bind(this);
        this.state = {value: ''};
    }

    render() {
        return (
            <div className="textarea">
                <textarea onChange={this.changeText} value={this.state.value}></textarea>
                <button onClick={this.sendMessage}>Отправить сообщение</button>
            </div>
        );
    }

    sendMessage() {
        console.log('new message');
        this.setState({value: ''});
        MessageActions.sendMessage({channel: 'general', message: this.state.value});
    }

    changeText(e) {
        this.setState({value: e.target.value});
    }
};