import React from 'react';
import './index.styl';
import Actions from '../../actions/actions';

var ENTER_KEY_CODE = 13;

export default class MessageBox extends React.Component {

    state = {text: ''};

    render() {
        return (
            <textarea
                className="messagebox"
                name="message"
                value={this.state.text}
                onChange={this._onChange}
                onKeyDown={this._onKeyDown}
                />
        );
    }

    _onChange = (event, value) => this.setState({text: event.target.value});

    _onKeyDown = (event) => {
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