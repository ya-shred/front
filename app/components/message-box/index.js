import React from 'react';
import './index.styl';
import Actions from '../../actions/actions';

var ENTER_KEY_CODE = 13;

export default class MessageBox extends React.Component {

    state = {text: ''};

    render() {
        return (
            <div className="message-box">
                <textarea
                    className="message-box__textarea"
                    name="message"
                    placeholder="Введите сообщение:"
                    value={this.state.text}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    />
            </div>
        );
    }

    onChange = (event, value) => this.setState({text: event.target.value});

    onKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            var text = this.state.text.trim();
            if (text) {
                Actions.sendMessage(text);
            }
            this.setState({text: ''});
        }
    }
}