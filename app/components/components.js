import React from 'react';
import MessagesList from './message-list';
import MessageBox from './message-box';
import '../app-styles/app.styl';
import '../app-styles/app.styl';

import UserList from './user-list';

class Components extends React.Component {
	render() {
		const messages = [
			{
				id: 1,
				online: true,
				avatarUrl: "http://i.imgur.com/DxS92cv.jpg",
				userUrl: "https://github.com/efimweb",
				userName: "efimweb",
				userDisplayName: "Ефим Пасианиди",
				messageText: "Кантал очень гибкий!",
				messageTime: "18:38"
			},
			{
				id: 2,
				online: false,
				avatarUrl: "http://i.imgur.com/bgNnG6z.jpg",
				userUrl: "https://github.com/ya-shred",
				userName: "ya-shred",
				userDisplayName: "Shred Man",
				messageText: "Правда?",
				messageTime: "18:39"
			},
			{
				id: 3,
				online: true,
				avatarUrl: "http://i.imgur.com/DxS92cv.jpg",
				userUrl: "https://github.com/efimweb",
				userName: "efimweb",
				userDisplayName: "Ефим Пасианиди",
				messageText: "Да!",
				messageTime: "18:40"
			}
		];
		const users = [
			{
				id: 2,
				online: true,
				avatarUrl: "https://avatars2.githubusercontent.com/u/10629760?v=3&s=460",
				userUrl: "https://github.com/Urkass",
				userName: "Urkass",
				userDisplayName: "Petr Kuznetsov"
			},
			{
				id: 2,
				online: false,
				avatarUrl: "http://i.imgur.com/DxS92cv.jpg",
				userUrl: "https://github.com/efimweb",
				userName: "efimweb",
				userDisplayName: "Ефим Пасианиди"
			}
		];

		return (
			<div className="chat-box">
				<h1>Hello world!</h1>
				<div className="thred-section">
					<UserList users={users} />
				</div>
				<div className="message-section">
					<MessagesList messages={messages} />
					<MessageBox />
				</div>
			</div>
		);
	}
}

export default Components;