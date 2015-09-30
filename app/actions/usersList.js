import AppDispatcher from '../dispatchers/dispatcher';
import Constants from '../constants/usersList';
import SocketActions from './socket';

export default {
    newUsers: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: Constants.NEW_USERS,
            data: data
        });
    },
    resetUsers: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: Constants.RESET_USERS,
            data: data
        });
    },
    userConnected: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: Constants.USER_CONNECTED,
            data: data
        });
    },
    userDisconnected: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: Constants.USER_DISCONNECTED,
            data: data
        });
    }
};