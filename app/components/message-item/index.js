import React from 'react';

export default class MessageItem extends React.Component {
    render() {
        return (
            <div className="message">
                <div className="message__header clearfix">
                    <div className="message__user">
                        <div className="message__user-avatar">
                            <img className="message__user-img" width="40" height="40" src={this.props.user.avatarUrl} />
                            <div className={this.props.userState}></div>
                        </div>
                        <h5 className="message__user-display-name">{this.props.user.displayName}</h5>
                        <a href={this.props.user.profileUrl} title={this.props.user.userName} className="message__user-url-icon icon-github"></a>
                    </div>
                    <div className="message__time">{this.props.datetime}</div>
                </div>
                <div className="message__text">{this.props.message}</div>
            </div>
        );

    }
}