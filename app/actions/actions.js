import  AppDispatcher from '../dispatchers/app-dispatcher';
import { ADD_MESSAGE, SEND_MESSAGE, ADD_USER, REMOVE_USER }  from '../constants/ActionTypes.js';

const AppActions = {


	sendMessage: function (mess) {
		AppDispatcher.handleViewAction({
			actionType: SEND_MESSAGE,
			mess: mess
		});
	},

	addMessage: function (mess) {
		AppDispatcher.handleViewAction({
			actionType: ADD_MESSAGE,
            mess: mess
		});
	},

	addUser: function (item) {
		AppDispatcher.handleViewAction({
			actionType: ADD_USER,
			item: item

		});
	},
	removeUser: function (id) {
		AppDispatcher.handleViewAction({
			actionType: REMOVE_USER,
			id: id
		});
	}
};

module.exports = AppActions;