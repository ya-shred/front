import AppDispatcher from '../dispatchers/dispatcher';
import {NEW_USERS, RESET_USERS, USER_CONNECTED, USER_DISCONNECTED, SEARCH_USER} from '../constants/usersList';
import SocketActions from './socket';

export default {
    newUsers(data) {
        AppDispatcher.handleSocketAction({
            actionType: NEW_USERS,
            data: data
        });
    },
    resetUsers(data) {
        AppDispatcher.handleSocketAction({
            actionType: RESET_USERS,
            data: data
        });
    },
    userConnected(data) {
        AppDispatcher.handleSocketAction({
            actionType: USER_CONNECTED,
            data: data
        });
    },
    userDisconnected(data) {
        AppDispatcher.handleSocketAction({
            actionType: USER_DISCONNECTED,
            data: data
        });
    },
    searchUser(text) {
        AppDispatcher.handleSocketAction({
            actionType: SEARCH_USER,
            text: text
        });
    }
};