import  AppDispatcher from '../dispatchers/app-dispatcher';
import { ADD_ITEM, REMOVE_ITEM, DECREASE_ITEM, INCREASE_ITEM }  from '../constants/ActionTypes.js';

const AppActions = {

	addItem: function (item) {
		AppDispatcher.handleViewAction({
			actionType: ADD_ITEM,
			item: item
		});
	},

	removeItem: function (index) {

		AppDispatcher.handleViewAction({
			actionType: REMOVE_ITEM,
			index: index
		});
	},

	increaseItem: function (index) {

		AppDispatcher.handleViewAction({
			actionType: INCREASE_ITEM,
			index: index
		})
	},

	decreaseItem: function (index) {

		AppDispatcher.handleViewAction({
			actionType: DECREASE_ITEM,
			index: index
		})
	}
};

module.exports = AppActions;