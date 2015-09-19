import { ADD_MESSAGE, SEND_MESSAGE, SEND_MESSAGE, ADD_USER, REMOVE_USER }  from '../constants/ActionTypes.js';
import  AppDispatcher from '../dispatchers/app-dispatcher';
import  assign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

const messages = [];

const users = [];



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

	getCart: function () {
		return cartItems;
	},

	getCatalog: function () {
		return catalog;
	},
	getCartTotals: function () {
		return cartTotal();
	},

	dispatcherIndex: AppDispatcher.register(function (payload) {

		var action = payload.action;

		switch( action.actionType ) {

			case ADD_ITEM: addItem(payload.action.item);
			break;
			case REMOVE_ITEM: removeItem(payload.action.index);
			break;
			case INCREASE_ITEM: increaseItem(payload.action.index);
			break;
			case DECREASE_ITEM: decreaseItem(payload.action.index);
			break;
		}

		AppStore.emitChange();

		return true;
	})

});

module.exports = AppStore;