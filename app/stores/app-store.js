import { SEND_MESSAGE, ADD_MESSAGE, ADD_USER, REMOVE_USER }  from '../constants/ActionTypes.js';
import  AppDispatcher from '../dispatchers/app-dispatcher';
import  assign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

const _messages = [{
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
}];

const users = [];

function sendMessage(messsage){
	let date = new Date();
	let messageTime = date.getHours() + ":" + date.getMinutes();
	let newMessage = {id: _messages.length + 1, online: true, avatarUrl: "http://i.imgur.com/DxS92cv.jpg", userName: "efimweb", userDisplayName: "Ефим Пасианиди", messageText: messsage, messageTime: messageTime};
	_messages.push(newMessage);
}



const AppStore = assign(EventEmitter.prototype, {

	emitChange: function () {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function (callback) {
		this.removeChangeListener(CHANGE_EVENT,callback);
	},

	getMessages: function () {
		return _messages;
	},

	dispatcherIndex: AppDispatcher.register(function (payload) {

		var action = payload.action;

		switch( action.actionType ) {

			case SEND_MESSAGE:
				sendMessage(payload.action.mess);
				AppStore.emitChange();
			break;
			case ADD_MESSAGE:
				addMessage(payload.action.mess);
			break;
			case ADD_USER:
				addUser(payload.action.item);
			break;
			case REMOVE_USER:
				removeUser(payload.action.id);
			break;
		}

		return true;
	})

});

module.exports = AppStore;