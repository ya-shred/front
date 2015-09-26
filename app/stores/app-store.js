import { SEND_MESSAGE, ADD_MESSAGE, ADD_USER, REMOVE_USER }  from '../constants/ActionTypes.js';
import  AppDispatcher from '../dispatchers/app-dispatcher';
import  assign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';
import $ from 'jquery';

const CHANGE_EVENT = 'change';

const messages = [];

const _users = [
	{
		online: true,
		avatarUrl: "https://avatars2.githubusercontent.com/u/10629760?v=3&s=460",
		userUrl: "https://github.com/Urkass",
		userLogin: "Urkass",
		userName: "Petr Kuznetsov"
	},
	{
		online: false,
		avatarUrl: "http://i.imgur.com/DxS92cv.jpg",
		userUrl: "https://github.com/efimweb",
		userLogin: "efimweb",
		userName: "Ефим Пасианиди"
	}
];

function addUser(userLogin){
	$.get("https://api.github.com/users/" + userLogin, function(data){
		console.log(data);
	let user ={
		online: true,
		avatarUrl: data.avatar_url,
		userUrl: data.url,
		userLogin: data.login,
		userName: data.name
	}
	_users.push(user);
		console.log(_users);
	});
}
function removeUser(user){
	let index = _users.map(function(e) {return e.userLogin}).indexOf(user);
	_users.splice(index, 1);
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

	getUsers: function () {
		return _users;
	},
	dispatcherIndex: AppDispatcher.register(function (payload) {

		var action = payload.action;

		switch( action.actionType ) {

			case SEND_MESSAGE:
				sendMessage(action.mess);
				AppStore.emitChange();
				break;
			case ADD_MESSAGE:
				addMessage(action.mess);
				break;
			case ADD_USER:
				addUser(action.userLogin);
				AppStore.emitChange();
				break;
			case REMOVE_USER:
				removeUser(action.userLogin);
				AppStore.emitChange();
				break;
		}
		return true;
	})

});

module.exports = AppStore;