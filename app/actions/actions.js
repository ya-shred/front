import  AppDispatcher from '../dispatchers/app-dispatcher';
import { ADD_MESSAGE, SEND_MESSAGE, ADD_USER, REMOVE_USER }  from '../constants/ActionTypes.js';

const AppActions = {
	sendMessage: function (mess) {
		AppDispatcher.handleViewAction({
			actionType: SEND_MESSAGE,
			mess: mess
		});
	}
};

module.exports = AppActions;