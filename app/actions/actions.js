import  AppDispatcher from '../dispatchers/app-dispatcher';
import { ADD_ITEM, REMOVE_ITEM, DECREASE_ITEM, INCREASE_ITEM }  from '../constants/ActionTypes.js';

const AppActions = {


	addItem: function (item) {
		AppDispatcher.handleViewAction({
			actionType: ADD_ITEM,
			item: item
		});
	}

};

module.exports = AppActions;