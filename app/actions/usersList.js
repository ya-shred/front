import AppDispatcher from '../dispatchers/dispatcher';
import {NEW_USERS, RESET_USERS, USER_CONNECTED, USER_DISCONNECTED} from '../constants/usersList';
import SocketActions from './socket';

export default {
    newUsers: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: NEW_USERS,
            data: data
        });
    },
    resetUsers: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: RESET_USERS,
            data: data
        });
    },
    userConnected: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: USER_CONNECTED,
            data: data
        });
    },
    userDisconnected: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: USER_DISCONNECTED,
            data: data
        });
    }
};