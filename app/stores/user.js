import Actions from '../constants/user.js';
import AppDispatcher from '../dispatchers/dispatcher';
import assign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let userInfo = {};

const store = assign({}, EventEmitter.prototype, {

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener(callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    },

    getUserInfo() {
        return userInfo;
    },

    dispatcherIndex: AppDispatcher.register((payload) => {

        let action = payload.action;

        switch (action.actionType) {
            case Actions.INFO_FETCHED:
                userInfo = action.info;
                store.emitChange();
                break;
        }

        return true;
    })

});

module.exports = store;