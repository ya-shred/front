import React from 'react';
import UserItem from '../user-item';
import './index.styl';

export default class UserList extends React.Component{
    render(){
        const UserItems = this.props.users.map( function(user){
            let userStateClass;
            if (user.online) {
                userStateClass = "user-item__state user-item__state_online"
            } else {
                userStateClass = "user-item__state"
            }
            return (<UserItem
                id={user.id}
                userState={userStateClass}
                avatarUrl={user.avatarUrl}
                userUrl={user.userUrl}
                userName={user.userName}
                userDisplayName={user.userDisplayName}/>);
        });
        return (
            <div className="user-section">
                <div className="user-list">
                    {UserItems}
                </div>
            </div>
        )
    }
}