import React from 'react';
import LogoutActions from '../../actions/logout';
import UserStore from '../../stores/user';
import './index.styl';


var getUserInfo = () => {
    return {
        user: UserStore.getUserInfo()
    }
};


export default class Logout extends React.Component {
	constructor() {
        super();
        this.state = getUserInfo();
    }



    handleClick = (event) => {
        LogoutActions.logout();
    };
    

    componentDidMount() {
        UserStore.addChangeListener(this.onChange);
    }

    onChange = () => {
        this.setState(getUserInfo());
        console.log(this.state);
    }


    render() {
        return <div className="logout">
        	<div className="logout__wrapper">
        		<img className="logout__img" src={this.state.user.avatarUrl}/>
        	</div><div 
        	className="logout__name">{this.state.user.displayName}</div><button 
        	onClick={this.handleClick} className="logout__button"></button>
        </div>;
        
    }

};


