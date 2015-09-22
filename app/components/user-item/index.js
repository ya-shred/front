import React from 'react';
import './index.styl';

export default class UserItem extends React.Component {
    render() {
        return (
            <div className='user-item'>
                <div className="user-item__avatar">
                    <img className="user-item__img" width="40" height="40" src={this.props.avatarUrl} />
                    <div className={this.props.userState}></div>
                </div>
                <div className="user-item__display-name">{this.props.userDisplayName}</div>
                <h5 className="user-item__login">{this.props.userName}</h5>
                <a href={this.props.userUrl} title={this.props.userName} className="user-item__url-icon icon-github"></a>
            </div>
        );
    }
}