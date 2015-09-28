import React from 'react';
import Actions from '../../actions/actions';
import AppStore from '../../stores/app-store';
import './index.styl';

let MarkdownTextarea = require('react-markdown-textarea');

export default class MessagesBox extends React.Component {
    state = {
        value: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Actions.sendMessage(this.state.value);
    }

    handleChange = (e) => {
        this.setState({
            value: e
        });
    }

    render() {
        return (
            <div className="input__container">
                <form className="input__form" onSubmit={this.handleSubmit}>
                    <MarkdownTextarea noPreview saveButtonText='Send' onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}