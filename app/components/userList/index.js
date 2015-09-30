import React from 'react';
import UserItem from '../userItem';
import UsersListStore from '../../stores/usersList';
import './index.styl';

function getUsersState() {
    return {
        users: UsersListStore.getAllUsers()
    };
}

export default class UserList extends React.Component {
    constructor() {
        super();
        this.state = getUsersState();
    }

    handleChange = (e) =>
        this.setState({inputLogin: e.target.value});


    componentDidMount () {
        UsersListStore.addChangeListener(this.onChange);
    }

    componentWillUnmount () {
        UsersListStore.removeChangeListener(this.onChange);
    }

    onChange = () => {
        this.setState(getUsersState());
    }


    render(){
        const UserItems = this.state.users.map( function(user){
            let userStateClass;
            if (user.online) {
                userStateClass = "user-item__state user-item__state_online"
            } else {
                userStateClass = "user-item__state"
            }
            return (<UserItem
                user={user}
                userState={userStateClass}/>);
        });
        return (
            <div className="user-section">
                <div className="user-list">
                    {UserItems}
                </div>

            </div>
        )
    };
}