import AppDispatcher from '../dispatchers/dispatcher';
import Constants from '../constants/message';
import SocketActions from './socket';

export default {
    sendMessage: function (data) {
        SocketActions.sendMessage(data);
        AppDispatcher.handleViewAction({
            actionType: Constants.SEND_MESSAGE,
            message: data
        });
    },

    newMessage: function (data) {
        AppDispatcher.handleSocketAction({
            actionType: Constants.NEW_MESSAGE,
            message: data
        });
    }
};