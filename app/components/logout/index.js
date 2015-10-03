import React from 'react';
import LogoutActions from '../../actions/logout';
import UserStore from '../../stores/user';
import './index.styl';


export default class Logout extends React.Component {

    handleClick = (event) => {
        LogoutActions.logout();
    };

    render() {
        return <button onClick={this.handleClick} className="logout">Выйти</button>
    }

};


