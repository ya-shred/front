import React from 'react';
import UserItem from '../user-item';
import AppStore from '../../stores/app-store';
import Actions from '../../actions/actions';
import './index.styl';

export default class UserList extends React.Component{
    state ={
        users: AppStore.getUsers(),
        inputLogin: 'dim2k2006'
    };

    handleChange = (e) => {
        this.setState({inputLogin: e.target.value});
    }
    componentDidMount = () => AppStore.addChangeListener(this.onChange);

    componentWillUnmount = () => AppStore.removeChangeListener(this.onChange);

    onChange= () => this.setState({messages: AppStore.getUsers()});
    render(){
        const UserItems = this.state.users.map( function(user){
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

                <input type="text" ref="text" value={this.state.inputLogin} onChange={this.handleChange} />
                <button className="user-button-add"  onClick={this.clickAddUser}>AddUser</button>
                <button className="user-button-remove"  onClick={this.clickRemoveUser}>RemoveUser</button>

            </div>
        )
    };
    clickAddUser = () =>{
        Actions.addUser(this.state.inputLogin);
    };
    clickRemoveUser = () =>{

        Actions.removeUser(this.state.inputLogin);
    }
}