import React from 'react';

export default class UserItem extends React.Component {
    render() {
        return (
            <li className={this.props.userStatus}>
                <div className="user-list__photo">
                    <img className="chat-window__avatar" src={this.props.user.avatarUrl}/>
                </div>
                <div className="user-list__box-content">
                    <div className="user-list__content">
                        <div className="user-list__box-name"><span
                            className="user-list__name">{this.props.user.name}</span>

                            <div className="user-list__status"/>
                        </div>
                        <div className="user-list__date">19:45</div>
                    </div>
                    <div className="user-list__content">
                        <div className="user-list__last-message">
                            Всю жизнь боялся Человека тапка
                        </div>
                        <div className="user-list__current-new-message">5</div>
                    </div>
                </div>
            </li>
        );
    }

}