import { ADD_ITEM, REMOVE_ITEM, DECREASE_ITEM, INCREASE_ITEM }  from '../constants/ActionTypes.js';
import  AppDispatcher from '../dispatchers/app-dispatcher';
import  assign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

const catalog = [];

for( let i = 1; i < 9; i++ ) {

	catalog.push({
		'id': 'Widget' + i,
		'title': 'Widget #' + i,
		'summary': 'ololo',
		'description': 'trololo',
		'cost': i
	});

}

const messages = [
	{
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
	}
];

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

	getMessages: function () {
		return messages;
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