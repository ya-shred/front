import React from 'react';
import Actions from '../../actions/actions';
import AppStore from '../../stores/app-store';
import './index.styl';

export default class MessagesBox extends React.Component {
    state = {
        userInput: ''
    }

    handleChange = (e) => {
        this.setState({userInput: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var text = React.findDOMNode(this.refs.text).value.trim();
        Actions.sendMessage(text);
    }

    render() {
        return (
            <div className="input__container">
                <form className="input__form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="text" value={this.state.userInput} onChange={this.handleChange} />
                    <button type="submit" className="input__button">Send</button>
                </form>
            </div>
        );
    }
}