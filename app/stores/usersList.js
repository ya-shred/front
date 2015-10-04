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

let addItems = (items) => {
    items.forEach((item) => {
        usersHash[item.id] = item;
    });
    users.push.apply(users, items);
};



let resetItems = (items) => {
    users.length = 0;
    addItems(items);
};

let setOnline = (userId) => {
    users[userId].online = true;
};

let setOffline = (userId) => {
    users[userId].online = false;
};

let searchUser = (text) => {
    if (text){

        let currentUsers = users.filter((user) => {

            let userDisplayName = user.name.toLowerCase();
            let test = text.toLowerCase();

            return userDisplayName.indexOf(test) > -1;
        });

        return currentUsers;
    } else{
        return users;
    }

};

let searchUserText;

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

    getAllUsers() {
        return searchUser(searchUserText);
    },

    getUserById(id) {
        return usersHash[id];
    },


    dispatcherIndex: AppDispatcher.register((payload) => {

        let action = payload.action;

        switch (action.actionType) {
            case Actions.RESET_USERS:
                resetItems(action.data.users);
                store.emitChange();
                break;
            case Actions.NEW_USERS:
                addItems(action.data.users);
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