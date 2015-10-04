import React from 'react';
import './index.styl';
import UsersListStore from '../../stores/usersList';
import UserList from '../userList';
import SearchUser from '../searchUser';

var getUsers = () => {
    return {
        users: UsersListStore.getAllUsers()
    };
};

export default class AsideLeft extends React.Component {

    constructor() {
        super();
        this.state = getUsers();
    }

    componentDidMount() {
        UsersListStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        UsersListStore.removeChangeListener(this.onChange);
    }

    onChange = () => {
        this.setState(getUsers());
    };

    handleChange = (e) => {
        this.setState({inputLogin: e.target.value});
    };

    render() {
        return (
            <aside className="aside-left">
                <SearchUser />
                <UserList users={this.state.users} />
            </aside>
        );
    }

}
