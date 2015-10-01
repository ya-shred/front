import Actions from '../constants/message.js';
import AppDispatcher from '../dispatchers/dispatcher';
import assign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';
import Dates from '../utils/dateTime.js';
const CHANGE_EVENT = 'change';

const messages = [];

var addItem = function (message) {
    var dataMessage = assign(message, {
        key: Math.random().toFixed() * 10 + 1,
        datetime: new Dates().getFullDate()
    });
    messages.push(dataMessage);
};

console.log(messages);


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
        return messages;
    }

});

AppDispatcher.register(function (payload) {

    var action = payload.action;

    switch (action.actionType) {
        case Actions.NEW_MESSAGE:
            addItem(payload.action.message);
        break;
    }

    AppStore.emitChange();
    return true;
});



module.exports = AppStore;