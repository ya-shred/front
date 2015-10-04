import React from 'react';
import MessageActions from '../../actions/message';
import UserActions from '../../actions/usersList.js';
import './index.styl';
import TextareaSize from 'react-textarea-autosize';
const ENTER_KEY_CODE = 13; // код клавиши enter

export default class Textarea extends React.Component {

    constructor() {
        super();
        this.state = {value: ''}
    }

    onChange = (event) => {
        this.setState({value: event.target.value});
    };

    onKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            var text = this.state.value.trim();
            if (text) {
                MessageActions.sendMessage({channel: 'general', message: text, userId: 123});
                MessageActions.newMessage({channel: 'general', message: text, userId: 123});
            }
            this.setState({value: ''});
        }
    };

    render() {
        return (
            <TextareaSize
                value={this.state.value}
                className="textarea"
                placeholder="Введите сообщение"
                minRows={2}
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}/>
        );
    }

}