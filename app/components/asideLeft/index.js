import React from 'react';
import './index.styl';
import Input from '../input/index.js';
import UserList from '../userList';

class AsideLeft extends React.Component {

	render() {
		return <aside className="aside-left">
			<div className="search-user">
				<Input type={"text"} placeholder={'Поиск'} className={'search-user__input'}/>
			</div>
			<UserList />
		</aside>

	}
}

export default AsideLeft;