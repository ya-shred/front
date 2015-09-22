import { SEND_MESSAGE, ADD_MESSAGE, ADD_USER, REMOVE_USER }  from '../constants/ActionTypes.js';
import  AppDispatcher from '../dispatchers/app-dispatcher';
import  assign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

const messages = [];

const users = [];


}

const cartItems = [];


function removeItem(index) {
	cartItems[index].inCart = false;
	cartItems.splice(index, 1);
}

function increaseItem(index) {
	cartItems[index].qty++;
}

function decreaseItem(index) {
	if(cartItems[index].qty > 1) {
		cartItems[index].qty--;
	}
	else {
		removeItem(index);
	}
}


function addItem(item){
	if(!item.inCart) {
		item['qty'] = 1;
		item['inCart'] = true;
		cartItems.push(item);
	}
	else {
		cartItems.forEach(function( cartItem, i ){
			if( cartItem.id === item.id ){
				increaseItem(i);
			}
		});
	}
}


function cartTotal() {

	var qty = 0, total = 0;
	cartItems.forEach(function (cartItem) {
		qty += cartItem.qty;
		total += cartItem.qty + cartItem.cost;
	});
	return {
		'qty': qty, 'total': total
	}
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

43
		return true;
	})

});

module.exports = AppStore;