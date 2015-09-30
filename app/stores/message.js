import Actions from '../constants/message.js';
import AppDispatcher from '../dispatchers/dispatcher';
import assign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

const messages = [
    {
        datetime: 1443539670118,
        message: 'Кантал очень гибкий!',
        user: {
            avatarUrl: "http://i.imgur.com/DxS92cv.jpg",
            userName: 'efimweb',
            displayName: 'Ефим Пасианиди',
            profileUrl: 'https://github.com/efimweb'

        }
    }, {
        datetime: 1443539370118,
        message: 'Правда?',
        user: {
            avatarUrl: "http://i.imgur.com/bgNnG6z.jpg",
            userName: 'ya-shred',
            displayName: 'Shred Man',
            profileUrl: 'https://github.com/ya-shred'

        }
    }, {
        datetime: 1443534670118,
        message: 'Да!',
        user: {
            avatarUrl: "http://i.imgur.com/DxS92cv.jpg",
            userName: 'efimweb',
            displayName: 'Ефим Пасианиди',
            profileUrl: 'https://github.com/efimweb'

        }
    }
];

var addItem = function (message) {
    messages.push(message);
};

const store = assign({}, EventEmitter.prototype, {

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
    },

    dispatcherIndex: AppDispatcher.register(function (payload) {

        var action = payload.action;

        switch (action.actionType) {
            case Actions.NEW_MESSAGE:
                addItem(payload.action.message);
                store.emitChange();
                break;
        }

        return true;
    })

});

module.exports = store;