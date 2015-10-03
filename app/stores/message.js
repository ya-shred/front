import Actions from '../constants/message.js';
import AppDispatcher from '../dispatchers/dispatcher';
import UsersListStore from './usersList';
import assign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';
const CHANGE_EVENT = 'change';

const messages = [{
        id: 1,
        message: "Кантал очень гибкий!",
        datetime: "1443790800000",
        userId: 123
    },
    {
        id: 2,
        message: "Правда?",
        datetime: "1443792360000",
        userId: 321
    },
    {
        id: 3,
        message: "Да!",
        datetime: "1443795600000",
        userId: 123
    }];

var addItem = function (message) {
    messages.push(message);
};

var searchMessage = function (text) {
    if (text){
        return messages.filter(function(message){

            var messageUser = UsersListStore.getUserById(message.userId);
            var userDisplayName = messageUser.name.toLowerCase();
            var messageText = message.message.toLowerCase();
            var test = text.toLowerCase();

            return userDisplayName.indexOf(test) > -1 || messageText.indexOf(test) > -1;
        });
    } else{
        return messages
    }
};

var searchMessageText = '';

const AppStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function (callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    },

    getAllMessages: function () {
        return searchMessage(searchMessageText);

    }

});

AppDispatcher.register(function (payload) {

    var action = payload.action;

    switch (action.actionType) {
        case Actions.NEW_MESSAGE:
            addItem(payload.action.message);
            break;
        case Actions.SEARCH_MESSAGE:
            searchMessageText = payload.action.text;
            break;
    }

    AppStore.emitChange();
    return true;
});



module.exports = AppStore;