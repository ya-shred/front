import React from 'react';
import './index.styl';
export default class MessageItem extends React.Component {
    render() {
        return (
            <div className="message-item">
                <div className="message-item__header clearfix">
                    <div className="message-item__user">
                        <div className="message-item__user-avatar">
                            <img className="message-item__user-img" width="40" height="40" src={this.props.avatarUrl} />
                            <div className={this.props.userState}></div>
                        </div>
                        <h5 className="message-item__user-display-name">{this.props.userDisplayName}</h5>
                        <a href={this.props.userUrl} title={this.props.userName} className="message-item__user-url-icon icon-github"></a>
                    </div>
                    <div className="message-item__time">{this.props.messageTime}</div>
                </div>
                <div className="message-item__text">{this.props.messageText}</div>
            </div>
        );

    }
}