import  AppDispatcher from '../dispatchers/app-dispatcher';
import { ADD_MESSAGE, SEND_MESSAGE, ADD_USER, REMOVE_USER }  from '../constants/ActionTypes.js';

const AppActions = {


	sendMessage: function (mess) {
		AppDispatcher.handleViewAction({
			actionType: SEND_MESSAGE,
			mess: mess
		});
	},

	addMessage: function (item) {
		AppDispatcher.handleViewAction({
			actionType: ADD_MESSAGE,
			item: item
		});
	},

	addUser: function (login) {
		AppDispatcher.handleViewAction({
			actionType: ADD_USER,
			userLogin: login
		});
	},
	removeUser: function (login) {
		AppDispatcher.handleViewAction({
			actionType: REMOVE_USER,
			userLogin: login
		});
	}
};

module.exports = AppActions;