import  AppDispatcher from '../dispatchers/app-dispatcher';
import { ADD_MESSAGE, SEND_MESSAGE, ADD_USER, REMOVE_USER, SEARCH_MESSAGE }  from '../constants/ActionTypes.js';

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
    },
    searchMessage: function (text) {
        AppDispatcher.handleViewAction({
            actionType: SEARCH_MESSAGE,
            text: text
        });
    }
};

module.exports = AppActions;