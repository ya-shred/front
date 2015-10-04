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

let addItem = (message) => {
    messages.push(message);
};

let searchMessage = (text) => {
    if (text){
        return messages.filter((message) => {
            let messageUser = UsersListStore.getUserById(message.userId);
            let userDisplayName = messageUser.name.toLowerCase();
            let messageText = message.message.toLowerCase();
            let test = text.toLowerCase();

            return userDisplayName.indexOf(test) > -1 || messageText.indexOf(test) > -1;
        });
    } else{
        return messages
    }
};

let searchMessageText;

export const AppStore = assign({}, EventEmitter.prototype, {

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    },

    getAllMessages() {
        return searchMessage(searchMessageText);

    }

});

AppDispatcher.register((payload) => {

    let action = payload.action;

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