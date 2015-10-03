import React from 'react';
import UserItem from '../userItem';
import './index.styl';

export default class UserList extends React.Component {

    render() {
        const userItem = this.props.users.map(user => {
            var userStatusClass = '';
            if (user.online) {
                userStatusClass = "user-list__item online"
            } else {
                userStatusClass = "user-list__item"
            }
            return <UserItem
                key={user.id}
                user={user}
                userStatus={userStatusClass}/>;
        });
        return <ul className="user-list">
            {userItem}
        </ul>


    }

}
