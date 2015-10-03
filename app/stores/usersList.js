import Actions from '../constants/usersList';
import AppDispatcher from '../dispatchers/dispatcher';
import assign  from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

const users = [
    {
        id: 123,
        online: true,
        avatarUrl: "http://i.imgur.com/DxS92cv.jpg",
        userUrl: "https://github.com/efimweb",
        userName: "efimweb",
        name: "Ефим Пасианиди"
    },
    {
        id: 321,
        online: true,
        avatarUrl: "http://i.imgur.com/bgNnG6z.jpg",
        userUrl: "https://github.com/ya-shred",
        userName: "ya-shred",
        name: "Shred Man"
    }
];
const usersHash = {
        123: {
            id: 123,
            online: true,
            avatarUrl: "http://i.imgur.com/DxS92cv.jpg",
            userUrl: "https://github.com/efimweb",
            userName: "efimweb",
            name: "Ефим Пасианиди"
        },
        321: {
            id: 321,
            online: true,
            avatarUrl: "http://i.imgur.com/bgNnG6z.jpg",
            userUrl: "https://github.com/ya-shred",
            userName: "ya-shred",
            name: "Shred Man"
        }
    };

var addItems = function (items) {
    items.forEach(function(item) {
        usersHash[item.id] = item;
    });
    users.push.apply(users, items);
};

var resetItems = function (items) {
    users.length = 0;
    addItems(items);
};

var setOnline = function (userId) {
    users[userId].online = true;
};

var setOffline = function (userId) {
    users[userId].online = false;
};

var searchUser = function (text) {
    if (text){

        var currentUsers = users.filter(function(user){

            var userDisplayName = user.name.toLowerCase();
            var test = text.toLowerCase();

            return userDisplayName.indexOf(test) > -1;
        });

        return currentUsers;
    } else{
        return users;
    }

};

let searchUserText = '';

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

    getAllUsers: function () {
        return searchUser(searchUserText);
    },

    getUserById: function (id) {
        return usersHash[id];
    },


    dispatcherIndex: AppDispatcher.register(function (payload) {

        var action = payload.action;

        switch (action.actionType) {
            case Actions.RESET_USERS:
                resetItems(action.data.users);
                store.emitChange();
                break;
            case Actions.NEW_USERS:
                addsItem(action.data.users);
                store.emitChange();
                break;
            case Actions.USER_CONNECTED:
                setOnline(action.data.userId);
                store.emitChange();
                break;
            case Actions.USER_DISCONNECTED:
                setOffline(action.data.userId);
                store.emitChange();
                break;
            case Actions.SEARCH_USER:
                searchUserText = action.text;
                store.emitChange();
                break;
        }

        return true;
    })

});

module.exports = store;